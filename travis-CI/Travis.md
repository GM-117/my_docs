# 持续集成CI

在这里，简单的介绍持续集成的概念、流程和实验。

## 持续集成概念

> 百度百科：持续集成是一种软件开发实践，即团队开发成员经常集成他们的工作，通常每个成员每天至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动化测试）来验证，从而尽早地发现集成错误。

持续集成 (Continuous integration，CI) 指的是频繁地（一天多次）将代码集成到主干。强调对于开发人员的每个提交，立刻进行构建、扫描、（单元）测试。根据结果，我们可以确定新代码和原有代码能否正确地集成在一起，只要有一个测试用例失败，就不能集成。

![img](https://img-blog.csdnimg.cn/20190216155009967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2R1YW5sZWkxMjM0NTY=,size_16,color_FFFFFF,t_70)

**持续集成的目的：快速发现错误，防止分支大幅偏离主干，让产品可以快速迭代，同时保持高质量。**

## 持续集成流程

前端开发转移到后端环境，意味着可以适用标准的软件工程流程。

1. 提交

   当代码在本地开发完成后，向代码仓库提交代码。

   ```shell
   $ git add -A / git add .
   $ git commit -m 'edit code'
   $ git push
   ```

2. 测试

   其实包括单元测试，集成（功能）测试，端对端测试。

   单元测试：针对函数或模块的测试

   集成测试：把单独的软件模块结合在一起作为整体接受测试（在每个模块完成单元测试后）

   功能测试：指测试软件各个功能模块是否正确，逻辑是否正确。

   端对端测试：验证完整的系统流程，全链路测试

3. 构建

   所谓构建，指的是将源码转换为可以运行的实际代码，比如安装依赖，配置各种资源（样式表、JS脚本、图片）等等。

   常用的构建工具如下：

   - [Jenkins](https://jenkins-ci.org/)
   - [Travis](https://travis-ci.com/)
   - [Codeship](https://www.codeship.io/)
   - [Strider](http://stridercd.com/)

   它们都会将构建和测试，在一次运行中执行完成。


#### 为什么要写测试？

​	Web 应用越来越复杂，意味着更可能出错。测试是提高代码质量、降低错误的最好方法之一。

​	测试可以确保得到预期结果、加快开发速度、方便维护、提供用法的文档、对于长期维护的项目，测试可以减	少投入时间，减轻维护难度。

### Mocha 测试框架

`mocha` 是 `JavaScript` 的一种单元测试框架，既可以在浏览器环境下运行，也可以在 `Node.js` 环境下运行。

所谓"测试框架"，就是运行测试的工具。通过它，可以为 `JavaScript` 应用添加测试，从而保证代码的质量。

使用 `mocha` ，我们就只需要专注于编写单元测试本身，然后，让 `mocha` 去自动运行所有的测试，并给出测试结果。

`Chai` 是一个针对 `Node.js` 和浏览器的行为驱动测试和测试驱动测试的诊断库，可与任何 `JavaScript` 测试框架集成。

mocha 的特点主要有：

1. 既可以测试简单的 JavaScript 函数，又可以测试异步代码，因为异步是 JavaScript 的特性之一；
2. 可以自动运行所有测试，也可以只运行特定的测试；
3. 可以支持 before、after、beforeEach 和 afterEach 来编写初始化代码。

#### 实验目的

​	学会使用 Mocha 进行单元测试。

#### 操作步骤

1. 新建 `mocha-demo` 目录并进入该目录，并使用 `npm init` 初始化项目。

2. 安装 `Mocha` 和 `chai`

   ```shell
   $ npm install -D mocha
   $ npm install -D chai
   ```

3. 新建 `add.js` 文件，并写入以下内容。

   ```javascript
   function add(x, y) {
     return x + y;
   }
   
   module.exports = add;
   ```

4. 新建一个测试脚本 `add.test.js`

   ```javascript
   var add = require('./add.js');
   var expect = require('chai').expect;
   describe('加法函数的测试', function() {
     it('1 加 1 应该等于 2', function() {
       expect(add(1, 1)).to.be.equal(2);
     });
   });
   ```

   测试脚本与所要测试的源码脚本同名，但是后缀名为`.test.js`（表示测试）或者`.spec.js`（表示规格）。比如，`add.js`的测试脚本名字就是`add.test.js`。

   测试脚本里面应该包括一个或多个`describe`块，每个`describe`块应该包括一个或多个`it`块。

   `describe`块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。

   `it`块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。

   上面的测试脚本里面，有一句断言。

   ```javascript
   expect(add(1, 1)).to.be.equal(2);
   ```

   所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。上面这句断言的意思是，调用`add(1, 1)`，结果应该等于`2`。

   所有的测试用例（`it`块）都应该含有一句或多句的断言。它是编写测试用例的关键。断言功能由断言库来实现，Mocha本身不带断言库，所以必须先引入断言库。

   ```javascript
   var expect = require('chai').expect;
   ```

   断言库有很多种，Mocha并不限制使用哪一种。上面代码引入的断言库是`chai`，并且指定使用它的`expect`断言风格。

5. 打开`package.json`文件，改写`scripts`字段的`test`脚本。

   ```json
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   
   // 改成
   
   "scripts": {
     "test": "mocha *.test.js"
   },
   ```

6. 命令行下，执行下面的命令，运行测试用例。

   ```shell
   $ npm test
   ```

#### 练习

​	请在`add.test.js`里面添加一个测试用例，测试`3`加上`-3`，`add`函数应该返回`0`。



## 持续集成服务平台 Travis CI

代码合并进主干以后，就可以进行自动构建和发布了。PaaS 平台即 (Platform-as-a-Service：平台即服务)，把应用服务的运行和开发环境作为一种服务提供的商业模式。

网上有很多 PaaS 平台，提供持续集成服务。Travis CI 就是其中最著名的一个，它可以根据你提供的脚本，自动完成构建和发布。

#### Travis CI 提供的持续集成 (Continuous Integration) 服务：

它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。提供一个运行环境，执行测试，完成构建，还能部署到服务器。

#### 实验目的

​	了解持续集成的做法，学会使用 Travis CI

#### Travis CI 持续集成需要满足以下条件：

- 拥有 GitHub 帐号
- 该帐号下面有一个项目
- 该项目里面**有可运行的代码**
- 该项目**还包含构建或测试脚本**

#### Travis CI 持续集成步骤：

1. 注册 Github 的账户。

2. 访问这个代码库[github.com/ruanyf/travis-ci-demo](github.com/ruanyf/travis-ci-demo)，点击右上角的 fork 按钮，将它克隆到你自己的仓库中。

3. 将你 fork 的代码库，克隆到本地 ```git clone https(URL)```

4. 使用你的 Github 账户，登录 [Travis CI](https://travis-ci.com/) 的首页。选定 `travis-ci-demo` 代码库运行自动构建。

5. 回到命令行，进入你本地的 `travis-ci-demo` 目录，切换到 `demo01`分支。

   ```shell
   $ cd travis-ci-demo
   $ git checkout demo01
   ```

6. 项目根目录下面有一个 **.travis.yml** 文件，这是 Travis CI 的配置文件。如果没有这个文件，就不会触发 Travis CI 的自动构建。

   对于 Node 项目，其中两个脚本有默认值，可以不用自己设定

   ```json
   install：npm install
   script：npm test
   ```

7. Travis CI 默认依次执行以下九个脚本。
   - before_install  <!--install阶段之前执行--> 
   - install 
   - before_script <!--script 阶段之前执行-->
   - script
   - after_success 或者 after_failure <!--script 阶段成功或失败时执行-->
   - after_script <!--script 阶段之后执行-->
   - before_deploy（可选） <!--deploy 步骤之前执行-->
   - deploy（可选） 
   - after_deploy（可选） <!--deploy 步骤之后执行-->

8. 运行流程

   Travis 的运行流程很简单，任何项目都会经过两个阶段。

   - install 阶段：安装依赖
   - script 阶段：运行脚本

9. 在根目录下新建一个新文件 `NewFile.txt` ，并且 `push` 提交项目，会触发 Travis CI 的自动构建。
10. 等到 Travis CI 完成自动构建，可以检查构建结果。