#!/bin/bash

set -e

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

PHP_VERSION=$(php -r 'echo PHP_MAJOR_VERSION.".".PHP_MINOR_VERSION;')

if [ "$PHP_VERSION" != "$1" ]; then
    brew install "php@$1"
    brew link --force "php@$1"
fi

brew install composer
