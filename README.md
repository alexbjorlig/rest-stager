# Rest-Stager

*let the data flow from REST to any destination*

# This project is currently being moved from a non-open-source repo. Stay tuned for more info!

## Why

Moving data from any REST API, to any destination, should be easy and fun!

## Goal

Many developers are faced with the same task of moving data from a REST api, to a destination. This should not require custom coding, but just configuration of a simple script specyfing the source, transformation and destination. Then Rest Stager will take care of pagination, retry-strategies, logging, error-reporting and robustness.

## Motivation

Moving data from a singel REST endpoint seems trivial in the beginning, and Nodejs is an excellent tool to get started. But after writing several scripts, I realized that the tasks were almost the same: 

1) Figure out how to REST api worked, normally using Postman
2) Get the data with Nodejs + requests
3) Insert the data into a destination

However this naive approach resulted in:

*  Many scripts in differet repos
*  The same issues with failing requests
*  Big memory consumption, and slow loads
*  Limited error reporting and robustness

