#!/bin/bash

set -e

ln -f "/usr/bin/php$1" "/etc/alternatives/php"
