#!/usr/bin/env bash

echo "Running composer"
php -d memory_limit=256M /usr/local/bin/composer install \
  --no-dev \
  --optimize-autoloader \
  --no-scripts \
  --working-dir=/var/www/html

echo "Clearing old cache..."
php artisan config:clear
php artisan cache:clear

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force
