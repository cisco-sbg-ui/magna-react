#!/bin/sh

TOKEN_FILE="./tokens/cds-magnetic-theme-web-css/dist/*.css"

sed -i.bak s/\\[data\\-cds\\-theme\\=\"magnetic-light\"\\]/\\.theme--default/g $TOKEN_FILE
sed -i.bak s/\\[data\\-cds\\-theme\\=\"magnetic-dark\"\\]/\\.theme--dusk/g $TOKEN_FILE
sed -i.bak s/\\[data\\-cds\\-theme\\=\"magnetic-classic-light\"\\]/\\.theme--classic-light/g $TOKEN_FILE
sed -i.bak s/\\[data\\-cds\\-theme\\=\"magnetic-classic-dark\"\\]/\\.theme--classic-dark/g $TOKEN_FILE
rm -f $TOKEN_FILE.bak
