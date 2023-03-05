#!/bin/bash

git submodule update --remote --merge

cd ./public/cdn-source

rm -rf Cargo*
rm -rf ./.gitignore
rm -rf src

cd ../..