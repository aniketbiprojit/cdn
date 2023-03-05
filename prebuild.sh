#!/bin/bash

git submodule update --remote --merge

cd ./public/cdn-source

echo "deleting 1"
rm -rf Cargo*
echo "deleting 2"
rm -rf ./.gitignore
echo "deleting 3"
rm -rf src
echo "deleting 4"
rm -rf .git

echo "more"
cd ../..


echo "Exiting"