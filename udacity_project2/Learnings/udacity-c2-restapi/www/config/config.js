"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    "dev": {
        //"username": "udagramgoswami1027dev",
        "username": "udgoswami1027dev",
        "password": "udgoswami1027dev",
        "database": "",
        "host": "udagramgoswami1027dev.cqkrhznpdrqi.us-east-2.rds.amazonaws.com",
        "dialect": "postgres",
        "aws_region": "",
        "aws_profile": "default",
        "aws_media_bucket": "udagramgoswamidev1"
    },
    "prod": {
        "username": "",
        "password": "",
        "database": "udagram_prod",
        "host": "",
        "dialect": "postgres"
    },
    "postgres": {
        "username": "udgoswami1027dev",
        "password": "udgoswami1027dev",
        "database": "postgres",
        "host": "udagramgoswami1027dev.cqkrhznpdrqi.us-east-2.rds.amazonaws.com",
        "dialect": "postgres",
    },
    "aws": {
        "aws_region": "us-east-1",
        "aws_profile": "default",
        "aws_media_bucket": "udagramgoswamidev1"
    },
    "jwt": {
        "secret": "Hello world"
    }
};
//# sourceMappingURL=config.js.map