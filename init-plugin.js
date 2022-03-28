console.log('hey! plugin js code executed')

let yml = `
---
  initilize:
    color: ff0000
    icon: text.svg
    blocks:
      - initilize:
          shadows:
            - 1
          args:
            a: statement
          function: initilize
          code: >
            var Script = pc.createScript('script');

// initialize code called once per entity
Script.prototype.initialize = function() {

};

// update code called every frame
Script.prototype.update = function(dt) {

};
          
          messages:
            - initalize
            - initialize section
            - update section
          hasReturn: false
          tooltip: test
          
`
createBlocksFromYAML(yml)
