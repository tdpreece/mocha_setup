# Setting up Mocha JavaScript test framework

The following describes how I went about setting up [Mocha](https://mochajs.org/)
for testing some simple Javascript.  I tried to do this with as few dependencies
as possible so I could focus on Mocha's role.  In production I'd also be 
using the [Webpack](karma test runner) (to ease working with multiple 
Javascript modules), [Karma](https://karma-runner.github.io) test runner
and [Gulp](http://gulpjs.com/) to automate Tasks.

# Installing Mocha
I created a new directory for this project then crated a new node project by
running a the following command and hitting Enter when presented with questions.

```bash
npm init
```

I then installed Mocha and [Chai](http://chaijs.com/) an assertion library.  Mocha
doesn't come with assertion library.

``bash
npm install --save-dev mocha
npm install --save-dev chai
```


