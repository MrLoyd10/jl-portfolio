#!/bin/sh
set -eu

cd /var/www/html

# Render generates a stable base64 key; Laravel expects the base64: prefix.
if [ -z "${APP_KEY:-}" ]; then
    : "${APP_KEY_BASE64:?Set APP_KEY or APP_KEY_BASE64}"
    export APP_KEY="base64:${APP_KEY_BASE64}"
fi

export APP_URL="${APP_URL:-${RENDER_EXTERNAL_URL:-http://localhost}}"

php artisan config:cache
php artisan route:cache

exec /start.sh
