#!/bin/bash
npm install supervisor -g
npm install mongoose --save  &&  supervisor ./bin/www
