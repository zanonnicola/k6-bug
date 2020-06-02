# k6 external node module bug

- Run `npm i`
- Run `browserify -r uuid -s uuid > uuid.js`
- Run `k6 run test.js -u 1 -i 1`

## Error

```
INFO[0002] undefined                                    
ERRO[0002] TypeError: Cannot read property 'v4' of undefined
        at generateCorrelationId (file:///Users/i518561/repos/k6-bug/test.js:13:246(14))
        at file:///Users/i518561/repos/k6-bug/test.js:12:26(3) 
    done [==========================================================] 1 / 1
```

## ENV

- Mac (Darwin -19.4.0)
- k6 v0.26.2 (dev build, go1.14, darwin/amd64)