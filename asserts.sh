#!/bin/bash

set -e

PHP_VERSION=$(php -r 'echo PHP_MAJOR_VERSION.".".PHP_MINOR_VERSION;')

if [ "$PHP_VERSION" != "$1" ]; then
    echo "Running PHP $PHP_VERSION instead of $1"
    exit 1
fi

php -v
composer --version
