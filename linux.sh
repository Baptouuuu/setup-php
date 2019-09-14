#!/bin/bash

set -e

sudo ln -f "/usr/bin/php$1" "/etc/alternatives/php"
