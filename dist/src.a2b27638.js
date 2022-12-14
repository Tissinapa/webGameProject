// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/collect.WAV":[function(require,module,exports) {
module.exports = "/collect.6569e7fa.WAV";
},{}],"assets/retro_music.mp3":[function(require,module,exports) {
module.exports = "/retro_music.56558930.mp3";
},{}],"assets/impact.WAV":[function(require,module,exports) {
module.exports = "/impact.3c6b2951.WAV";
},{}],"assets/hitEnemy.WAV":[function(require,module,exports) {
module.exports = "/hitEnemy.2e45bbad.WAV";
},{}],"assets/wonGame.WAV":[function(require,module,exports) {
module.exports = "/wonGame.5c63026a.WAV";
},{}],"assets/platform.png":[function(require,module,exports) {
module.exports = "/platform.4293a96e.png";
},{}],"assets/hearth.png":[function(require,module,exports) {
module.exports = "/hearth.039b7d6d.png";
},{}],"assets/star.png":[function(require,module,exports) {
module.exports = "/star.d86a814f.png";
},{}],"assets/redStar.png":[function(require,module,exports) {
module.exports = "/redStar.c6680dea.png";
},{}],"assets/masterBall.png":[function(require,module,exports) {
module.exports = "/masterBall.64b62e0e.png";
},{}],"assets/badGuy.png":[function(require,module,exports) {
module.exports = "/badGuy.12dd15b5.png";
},{}],"assets/dude.png":[function(require,module,exports) {
module.exports = "/dude.83d5008b.png";
},{}],"assets/openScene.png":[function(require,module,exports) {
module.exports = "/openScene.b6edc399.png";
},{}],"assets/guide.png":[function(require,module,exports) {
module.exports = "/guide.d536a468.png";
},{}],"src/index.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var game;
var gameOptions = {
  dudeGravity: 1000,
  dudeSpeed: 800
};

window.onload = function () {
  var gameConfig = {
    type: Phaser.AUTO,
    backgroundColor: "#00ccff",
    //"#00ccff"
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      height: 1200
    },
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        gravity: {
          y: 0
        }
      }
    },
    scene: [OpeningScene, GuideScene, PlayGame, HarderGame] //scene: OpeningScene

  };
  game = new Phaser.Game(gameConfig);
  window.focus();
};

var PlayGame = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(PlayGame, _Phaser$Scene);

  var _super = _createSuper(PlayGame);

  function PlayGame() {
    var _this;

    _classCallCheck(this, PlayGame);

    _this = _super.call(this, "PlayGame");
    _this.score = 0;
    _this.health = 100;
    return _this;
  }

  _createClass(PlayGame, [{
    key: "preload",
    value: function preload() {
      this.load.audio("collect", require("../assets/collect.WAV"));
      this.load.audio("backgroundMusic", require("../assets/retro_music.mp3"));
      this.load.audio("die", require("../assets/impact.WAV"));
      this.load.audio("hit", require("../assets/hitEnemy.WAV"));
      this.load.audio("masterSound", require("../assets/wonGame.WAV"));
      this.load.image("ground", require("../assets/platform.png"));
      this.load.image("hearth", require("../assets/hearth.png"));
      this.load.image("star", require("../assets/star.png"));
      this.load.image("redStar", require("../assets/redStar.png"));
      this.load.image("masterBall", require("../assets/masterBall.png"));
      this.load.image("badGuy", require("../assets/badGuy.png"));
      this.load.spritesheet("dude", require("../assets/dude.png"), {
        frameWidth: 32,
        frameHeigth: 48
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.groundGroup = this.physics.add.group({
        immovable: true,
        allowGravity: false
      });

      for (var i = 1; i < 20; i++) {
        this.groundGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "ground");
      } //Dude


      this.dude = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, "dude");
      this.dude.body.gravity.y = gameOptions.dudeGravity;
      this.physics.add.collider(this.dude, this.groundGroup); //Stars and colect sound

      this.starsGroup = this.physics.add.group({});
      this.physics.add.collider(this.starsGroup, this.groundGroup);
      this.physics.add.overlap(this.dude, this.starsGroup, this.collectStar, null, this);
      this.collectSound = this.sound.add("collect"); //Redstars

      this.redStarsGroup = this.physics.add.group({});
      this.physics.add.collider(this.redStarsGroup, this.groundGroup);
      this.physics.add.overlap(this.dude, this.redStarsGroup, this.collectRedStar, null, this); //BadGuy

      this.enemiesGroup = this.physics.add.group({});
      this.physics.add.collider(this.enemiesGroup, this.groundGroup);
      this.physics.add.collider(this.dude, this.enemiesGroup, this.hitEnemy, null, this);
      this.hitEnemySound = this.sound.add("hit"); //masterBall

      this.masterBall = this.physics.add.group({});
      this.physics.add.collider(this.masterBall, this.groundGroup);
      this.physics.add.collider(this.dude, this.masterBall, this.gameWon, null, this);
      this.gameWonSound = this.sound.add("masterSound"); //Scoreboard and health

      this.add.image(16, 16, "star");
      this.scoreText = this.add.text(32, 10, "0", {
        fontsize: "35px",
        fill: "#ffffff"
      });
      this.add.image(16, 50, "hearth");
      this.healthText = this.add.text(32, 43, "100", {
        fontsize: "35px",
        fill: "#ffffff"
      }); //GameOver

      this.gameOverText = this.add.text(400, 400, "Game Over", {
        fontsize: "500px",
        fill: "#000000"
      });
      this.gameOverText.setOrigin(0.5);
      this.gameOverText.visible = false;
      this.dieSound = this.sound.add("die"); //BackgroundMussic

      this.bgMusic = this.sound.add("backgroundMusic"); //game Won

      this.gameWonText = this.add.text(450, 400, "Game Won", {
        fontsize: "500px",
        fill: "#000000"
      });
      this.gameWonText.visible = false; //controls

      this.cursors = this.input.keyboard.createCursorKeys(); //Dude walking animations

      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", {
          start: 0,
          end: 4
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "turn",
        frames: [{
          key: "dude",
          frame: 4
        }],
        frameRate: 10
      });
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", {
          start: 5,
          end: 9
        }),
        frameRate: 10,
        repeat: -1
      });
      this.triggerTimer = this.time.addEvent({
        callback: this.addGround,
        callbackScope: this,
        delay: 700,
        loop: true
      });
    }
  }, {
    key: "addGround",
    value: function addGround() {
      this.groundGroup.create(Phaser.Math.Between(0, game.config.width), 0, "ground");
      this.groundGroup.setVelocityY(gameOptions.dudeSpeed / 8); //this.bgMusic.play()
      //Falling stars and enemies

      if (Phaser.Math.Between(0, 1)) {
        this.starsGroup.create(Phaser.Math.Between(0, game.config.width), 0, "star");
        this.redStarsGroup.create(Phaser.Math.Between(0, game.config.width), 0, "redStar");
        this.enemiesGroup.create(Phaser.Math.Between(0, game.config.width), 0, "badGuy");
        this.starsGroup.setVelocityY(gameOptions.dudeSpeed);
        this.enemiesGroup.setVelocityY(gameOptions.dudeSpeed);
        this.redStarsGroup.setVelocityY(gameOptions.dudeSpeed);
      }

      if (this.score >= 50) {
        this.masterBall.create(Phaser.Math.Between(0, game.config.width), 0, "masterBall");
        this.masterBall.setVelocityY(gameOptions.dudeSpeed);
      }
    }
  }, {
    key: "collectStar",
    value: function collectStar(dude, star) {
      star.disableBody(true, true);
      this.score += 1;
      this.scoreText.setText(this.score);
      this.collectSound.play();
    }
  }, {
    key: "collectRedStar",
    value: function collectRedStar(dude, redStar) {
      redStar.disableBody(true, true);
      this.score += 5;
      this.scoreText.setText(this.score);
      this.collectSound.play();
    }
  }, {
    key: "hitEnemy",
    value: function hitEnemy(dude, badGuy) {
      badGuy.disableBody(true, true);
      this.health -= 10;
      this.healthText.setText(this.health);
      this.hitEnemySound.play();

      if (this.health <= 0) {
        this.dieSound.play();
        console.log("gameOver");
        this.physics.pause();
        gameOver = true;
        this.gameOverText.visible = true;
      } //console.log("gameOver")
      //this.physics.pause();
      //gameOver = true;
      //this.gameOverText.visible = true

    }
  }, {
    key: "gameWon",
    value: function gameWon(dude, masterBall) {
      console.log("You won the game");
      this.gameWonSound.play();
      this.physics.pause();
      gameOver = true;
      this.gameWonText.visible = true;
    }
  }, {
    key: "update",
    value: function update() {
      //Controls
      if (this.cursors.left.isDown) {
        this.dude.body.velocity.x = -gameOptions.dudeSpeed;
        this.dude.anims.play("left", true);
      } else if (this.cursors.right.isDown) {
        this.dude.body.velocity.x = gameOptions.dudeSpeed;
        this.dude.anims.play("right", true);
      } else {
        this.dude.body.velocity.x = 0;
        this.dude.anims.play("turn", true);
      }

      if (this.cursors.up.isDown && this.dude.body.touching.down) {
        this.dude.body.velocity.y = -gameOptions.dudeGravity / 1.6;
      } //If die, restart


      if (this.dude.y > game.config.height || this.dude.y < 0) {
        this.scene.start("OpeningScene");
      }
    }
  }]);

  return PlayGame;
}(Phaser.Scene);

var OpeningScene = /*#__PURE__*/function (_Phaser$Scene2) {
  _inherits(OpeningScene, _Phaser$Scene2);

  var _super2 = _createSuper(OpeningScene);

  function OpeningScene() {
    _classCallCheck(this, OpeningScene);

    return _super2.call(this, "OpeningScene");
  }

  _createClass(OpeningScene, [{
    key: "preload",
    value: function preload() {
      this.load.image("opening", require("../assets/openScene.png"));
    }
  }, {
    key: "create",
    value: function create() {
      this.add.image(0, 0, "opening").setOrigin(0);
      this.cursors = this.input.keyboard.createCursorKeys();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.cursors.left.isDown) {
        this.scene.start("PlayGame");
      } else if (this.cursors.right.isDown) {
        this.scene.start("HarderGame");
      } else if (this.cursors.up.isDown) {
        this.scene.start("GuideScene");
      }
    }
  }]);

  return OpeningScene;
}(Phaser.Scene);

var GuideScene = /*#__PURE__*/function (_Phaser$Scene3) {
  _inherits(GuideScene, _Phaser$Scene3);

  var _super3 = _createSuper(GuideScene);

  function GuideScene() {
    _classCallCheck(this, GuideScene);

    return _super3.call(this, "GuideScene");
  }

  _createClass(GuideScene, [{
    key: "preload",
    value: function preload() {
      this.load.image("guidence", require("../assets/guide.png"));
    }
  }, {
    key: "create",
    value: function create() {
      this.add.image(0, 0, "guidence").setOrigin(0);
      this.cursors = this.input.keyboard.createCursorKeys();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.cursors.left.isDown) {
        this.scene.start("PlayGame");
      } else if (this.cursors.right.isDown) {
        this.scene.start("HarderGame");
      }
    }
  }]);

  return GuideScene;
}(Phaser.Scene);

var HarderGame = /*#__PURE__*/function (_Phaser$Scene4) {
  _inherits(HarderGame, _Phaser$Scene4);

  var _super4 = _createSuper(HarderGame);

  function HarderGame() {
    var _this2;

    _classCallCheck(this, HarderGame);

    _this2 = _super4.call(this, "HarderGame");
    _this2.score = 0;
    _this2.health = 100;
    return _this2;
  }

  _createClass(HarderGame, [{
    key: "preload",
    value: function preload() {
      this.load.audio("collect", require("../assets/collect.WAV"));
      this.load.audio("backgroundMusic", require("../assets/retro_music.mp3"));
      this.load.audio("die", require("../assets/impact.WAV"));
      this.load.audio("hit", require("../assets/hitEnemy.WAV"));
      this.load.audio("masterSound", require("../assets/wonGame.WAV"));
      this.load.image("ground", require("../assets/platform.png"));
      this.load.image("hearth", require("../assets/hearth.png"));
      this.load.image("star", require("../assets/star.png"));
      this.load.image("redStar", require("../assets/redStar.png"));
      this.load.image("masterBall", require("../assets/masterBall.png"));
      this.load.image("badGuy", require("../assets/badGuy.png"));
      this.load.spritesheet("dude", require("../assets/dude.png"), {
        frameWidth: 32,
        frameHeigth: 48
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.groundGroup = this.physics.add.group({
        immovable: true,
        allowGravity: false
      });

      for (var i = 1; i < 20; i++) {
        this.groundGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "ground");
      } //Dude


      this.dude = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, "dude");
      this.dude.body.gravity.y = gameOptions.dudeGravity;
      this.physics.add.collider(this.dude, this.groundGroup); //Stars and colect sound

      this.starsGroup = this.physics.add.group({});
      this.physics.add.collider(this.starsGroup, this.groundGroup);
      this.physics.add.overlap(this.dude, this.starsGroup, this.collectStar, null, this);
      this.collectSound = this.sound.add("collect"); //Redstars

      this.redStarsGroup = this.physics.add.group({});
      this.physics.add.collider(this.redStarsGroup, this.groundGroup);
      this.physics.add.overlap(this.dude, this.redStarsGroup, this.collectRedStar, null, this); //BadGuy

      this.enemiesGroup = this.physics.add.group({});
      this.physics.add.collider(this.enemiesGroup, this.groundGroup);
      this.physics.add.collider(this.dude, this.enemiesGroup, this.hitEnemy, null, this);
      this.hitEnemySound = this.sound.add("hit"); //masterBall

      this.masterBall = this.physics.add.group({});
      this.physics.add.collider(this.masterBall, this.groundGroup);
      this.physics.add.collider(this.dude, this.masterBall, this.gameWon, null, this);
      this.gameWonSound = this.sound.add("masterSound"); //Scoreboard and health

      this.add.image(16, 16, "star");
      this.scoreText = this.add.text(32, 10, "0", {
        fontsize: "35px",
        fill: "#ffffff"
      });
      this.add.image(16, 50, "hearth");
      this.healthText = this.add.text(32, 43, "100", {
        fontsize: "35px",
        fill: "#ffffff"
      }); //GameOver

      this.gameOverText = this.add.text(400, 400, "Game Over", {
        fontsize: "500px",
        fill: "#000000"
      });
      this.gameOverText.setOrigin(0.5);
      this.gameOverText.visible = false;
      this.dieSound = this.sound.add("die"); //BackgroundMussic

      this.bgMusic = this.sound.add("backgroundMusic"); //game Won

      this.gameWonText = this.add.text(450, 400, "Game Won", {
        fontsize: "500px",
        fill: "#000000"
      });
      this.gameWonText.visible = false; //controls

      this.cursors = this.input.keyboard.createCursorKeys(); //Dude walking animations

      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", {
          start: 0,
          end: 4
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "turn",
        frames: [{
          key: "dude",
          frame: 4
        }],
        frameRate: 10
      });
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", {
          start: 5,
          end: 9
        }),
        frameRate: 10,
        repeat: -1
      });
      this.triggerTimer = this.time.addEvent({
        callback: this.addGround,
        callbackScope: this,
        delay: 700,
        loop: true
      });
    }
  }, {
    key: "addGround",
    value: function addGround() {
      this.groundGroup.create(Phaser.Math.Between(0, game.config.width), 0, "ground");
      this.groundGroup.setVelocityY(gameOptions.dudeSpeed / 4); //this.bgMusic.play()
      //Falling stars and enemies

      if (Phaser.Math.Between(0, 1)) {
        this.starsGroup.create(Phaser.Math.Between(0, game.config.width), 0, "star");
        this.redStarsGroup.create(Phaser.Math.Between(0, game.config.width), 0, "redStar");
        this.enemiesGroup.create(Phaser.Math.Between(0, game.config.width), 0, "badGuy");
        this.starsGroup.setVelocityY(gameOptions.dudeSpeed);
        this.enemiesGroup.setVelocityY(gameOptions.dudeSpeed);
        this.redStarsGroup.setVelocityY(gameOptions.dudeSpeed);
      }

      if (this.score >= 100) {
        this.masterBall.create(Phaser.Math.Between(0, game.config.width), 0, "masterBall");
        this.masterBall.setVelocityY(gameOptions.dudeSpeed);
      }
    }
  }, {
    key: "collectStar",
    value: function collectStar(dude, star) {
      star.disableBody(true, true);
      this.score += 3;
      this.scoreText.setText(this.score);
      this.collectSound.play();
    }
  }, {
    key: "collectRedStar",
    value: function collectRedStar(dude, redStar) {
      redStar.disableBody(true, true);
      this.score += 10;
      this.scoreText.setText(this.score);
      this.collectSound.play();
    }
  }, {
    key: "hitEnemy",
    value: function hitEnemy(dude, badGuy) {
      badGuy.disableBody(true, true);
      this.health -= 20;
      this.healthText.setText(this.health);
      this.hitEnemySound.play();

      if (this.health <= 0) {
        this.dieSound.play();
        console.log("gameOver");
        this.physics.pause();
        gameOver = true;
        this.gameOverText.visible = true;
      } //console.log("gameOver")
      //this.physics.pause();
      //gameOver = true;
      //this.gameOverText.visible = true

    }
  }, {
    key: "gameWon",
    value: function gameWon(dude, masterBall) {
      console.log("You won the game");
      this.gameWonSound.play();
      this.physics.pause();
      gameOver = true;
      this.gameWonText.visible = true;
    }
  }, {
    key: "update",
    value: function update() {
      //Controls
      if (this.cursors.left.isDown) {
        this.dude.body.velocity.x = -gameOptions.dudeSpeed;
        this.dude.anims.play("left", true);
      } else if (this.cursors.right.isDown) {
        this.dude.body.velocity.x = gameOptions.dudeSpeed;
        this.dude.anims.play("right", true);
      } else {
        this.dude.body.velocity.x = 0;
        this.dude.anims.play("turn", true);
      }

      if (this.cursors.up.isDown && this.dude.body.touching.down) {
        this.dude.body.velocity.y = -gameOptions.dudeGravity / 1.6;
      } //If die, restart


      if (this.dude.y > game.config.height || this.dude.y < 0) {
        this.scene.start("OpeningScene");
      }
    }
  }]);

  return HarderGame;
}(Phaser.Scene);
},{"../assets/collect.WAV":"assets/collect.WAV","../assets/retro_music.mp3":"assets/retro_music.mp3","../assets/impact.WAV":"assets/impact.WAV","../assets/hitEnemy.WAV":"assets/hitEnemy.WAV","../assets/wonGame.WAV":"assets/wonGame.WAV","../assets/platform.png":"assets/platform.png","../assets/hearth.png":"assets/hearth.png","../assets/star.png":"assets/star.png","../assets/redStar.png":"assets/redStar.png","../assets/masterBall.png":"assets/masterBall.png","../assets/badGuy.png":"assets/badGuy.png","../assets/dude.png":"assets/dude.png","../assets/openScene.png":"assets/openScene.png","../assets/guide.png":"assets/guide.png"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63783" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map