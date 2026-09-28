FROM richarvey/nginx-php-fpm:3.1.6 AS php-build

WORKDIR /var/www/html

COPY composer.json composer.lock ./
RUN COMPOSER_ALLOW_SUPERUSER=1 composer install \
    --no-dev --no-interaction --no-scripts --optimize-autoloader --prefer-dist

COPY . .
RUN php artisan package:discover --ansi

FROM node:22-alpine AS assets

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ARG VITE_PROFILE_IMAGE_URL
RUN cp .env.example .env && PUBLIC_ONLY_BUILD=1 SKIP_WAYFINDER=1 npm run build:laravel

FROM richarvey/nginx-php-fpm:3.1.6

WORKDIR /var/www/html

COPY --from=php-build /var/www/html /var/www/html
COPY --from=assets /app/public/build /var/www/html/public/build
COPY docker/nginx.conf /etc/nginx/sites-available/default.conf
COPY docker/start.sh /usr/local/bin/portfolio-start

RUN chmod +x /usr/local/bin/portfolio-start \
    && mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs bootstrap/cache

ENV SKIP_COMPOSER=1 \
    WEBROOT=/var/www/html/public \
    PHP_ERRORS_STDERR=1 \
    APP_ENV=production \
    APP_DEBUG=false \
    LOG_CHANNEL=stderr

CMD ["/usr/local/bin/portfolio-start"]
