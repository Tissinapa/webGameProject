let game;

const gameOptions = {
	dudeGravity: 1000,
	dudeSpeed: 800
}
window.onload = function() {
	let gameConfig = {
		type: Phaser.AUTO,
		backgroundColor: "#00ccff",//"#00ccff"
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			width: 800,
			height: 1200,
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
		scene: [OpeningScene,GuideScene,PlayGame,HarderGame]
		//scene: OpeningScene
	}
	game = new Phaser.Game(gameConfig)
	window.focus();
}
class PlayGame extends Phaser.Scene {

	constructor() {
		super("PlayGame")
		this.score = 0
    	this.health = 100
		
	}
	
	preload(){
		this.load.audio("collect", require("../assets/collect.WAV"))
		this.load.audio("backgroundMusic", require("../assets/retro_music.mp3"))
		this.load.audio("die", require("../assets/impact.WAV"))
		this.load.audio("hit",require("../assets/hitEnemy.WAV"))
		this.load.audio("masterSound",require("../assets/wonGame.WAV"))
		this.load.image("ground", require("../assets/platform.png"))
    	this.load.image("hearth", require("../assets/hearth.png"))
		this.load.image("star", require("../assets/star.png"))
		this.load.image("redStar", require("../assets/redStar.png"))
		this.load.image("masterBall", require("../assets/masterBall.png"))
		this.load.image("badGuy", require("../assets/badGuy.png"))
		this.load.spritesheet("dude",require("../assets/dude.png"), {frameWidth: 32, frameHeigth: 48});
	}

	create(){
		this.groundGroup = this.physics.add.group({
			immovable: true,
			allowGravity: false
		})

		for(let i = 1 ; i < 20 ; i++){
			this.groundGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "ground");

		}
		//Dude
		this.dude = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, "dude")
		this.dude.body.gravity.y = gameOptions.dudeGravity
		this.physics.add.collider(this.dude, this.groundGroup)
		
		//Stars and colect sound
		this.starsGroup = this.physics.add.group({})
		this.physics.add.collider(this.starsGroup, this.groundGroup)
		this.physics.add.overlap(this.dude, this.starsGroup, this.collectStar, null , this)
		this.collectSound = this.sound.add("collect")

		//Redstars
		this.redStarsGroup = this.physics.add.group({})
		this.physics.add.collider(this.redStarsGroup, this.groundGroup)
		this.physics.add.overlap(this.dude, this.redStarsGroup, this.collectRedStar, null , this)
		
		//BadGuy
		this.enemiesGroup = this.physics.add.group({})
		this.physics.add.collider(this.enemiesGroup, this.groundGroup)
		this.physics.add.collider(this.dude, this.enemiesGroup, this.hitEnemy, null, this)
		this.hitEnemySound = this.sound.add("hit")

		//masterBall
		this.masterBall = this.physics.add.group({})
		this.physics.add.collider(this.masterBall, this.groundGroup)
		this.physics.add.collider(this.dude, this.masterBall, this.gameWon, null, this)
		this.gameWonSound = this.sound.add("masterSound")
		
		//Scoreboard and health
		this.add.image(16,16, "star")
		this.scoreText = this.add.text(32,10,"0", {fontsize: "35px", fill: "#ffffff"})
    	this.add.image(16,50, "hearth")
    	this.healthText = this.add.text(32,43,"100", {fontsize: "35px", fill: "#ffffff"})
		
		//GameOver
		this.gameOverText = this.add.text(400,400,"Game Over", {fontsize: "500px", fill: "#000000"})
		this.gameOverText.setOrigin(0.5)
		this.gameOverText.visible = false
		this.dieSound = this.sound.add("die")

		//BackgroundMussic
		this.bgMusic = this.sound.add("backgroundMusic")

		//game Won
		this.gameWonText=this.add.text(450,400,"Game Won", {fontsize: "500px", fill: "#000000"})
		this.gameWonText.visible = false
		
		//controls
		this.cursors = this.input.keyboard.createCursorKeys()

		//Dude walking animations
		this.anims.create({
			key: "left",
			frames: this.anims.generateFrameNumbers("dude",{start:0,end: 4}),
			frameRate: 10,
			repeat: -1
		})
		this.anims.create({
			key: "turn",
			frames: [{key: "dude", frame: 4}],
			frameRate: 10,
			
		})

		this.anims.create({
			key: "right",
			frames: this.anims.generateFrameNumbers("dude",{start:5,end: 9,}),
			frameRate: 10,
			repeat: -1
		})

		this.triggerTimer = this.time.addEvent({
			callback: this.addGround,
			callbackScope: this,
			delay: 700,
			loop: true
		})
	}


	addGround(){
		
		this.groundGroup.create(Phaser.Math.Between(0,game.config.width), 0, "ground")
		this.groundGroup.setVelocityY(gameOptions.dudeSpeed / 8)
		//this.bgMusic.play()
		
		//Falling stars and enemies
		if(Phaser.Math.Between(0, 1)) {
            this.starsGroup.create(Phaser.Math.Between(0, game.config.width), 0, "star")
			this.redStarsGroup.create(Phaser.Math.Between(0, game.config.width), 0, "redStar")
			this.enemiesGroup.create(Phaser.Math.Between(0, game.config.width),0, "badGuy")
            this.starsGroup.setVelocityY(gameOptions.dudeSpeed)
			this.enemiesGroup.setVelocityY(gameOptions.dudeSpeed)
			this.redStarsGroup.setVelocityY(gameOptions.dudeSpeed)
        }
		if(this.score >= 50){
			this.masterBall.create(Phaser.Math.Between(0, game.config.width),0, "masterBall")
			this.masterBall.setVelocityY(gameOptions.dudeSpeed)
		}
			

	}
	collectStar(dude, star) {
		star.disableBody(true, true)
		this.score += 1
		this.scoreText.setText(this.score)
		this.collectSound.play()
	}
	collectRedStar(dude, redStar) {
		redStar.disableBody(true, true)
		this.score += 5
		this.scoreText.setText(this.score)
		this.collectSound.play()
	}
	hitEnemy(dude, badGuy){
    	badGuy.disableBody(true,true)

    	this.health -= 10
		this.healthText.setText(this.health)
		this.hitEnemySound.play()

		if(this.health <= 0){
			this.dieSound.play()
			console.log("gameOver")
			this.physics.pause();
			gameOver = true;
			this.gameOverText.visible = true
		}
		//console.log("gameOver")
		//this.physics.pause();
		//gameOver = true;
		//this.gameOverText.visible = true
	}
	gameWon(dude, masterBall){
		console.log("You won the game")
		this.gameWonSound.play()
		this.physics.pause();
		gameOver = true;
		this.gameWonText.visible = true
	}	

	
	update() {
		//Controls
		if(this.cursors.left.isDown){
			this.dude.body.velocity.x = -gameOptions.dudeSpeed
			this.dude.anims.play("left",true)
		}
		else if(this.cursors.right.isDown){
			this.dude.body.velocity.x = gameOptions.dudeSpeed
			this.dude.anims.play("right",true)
		}
		else{
			this.dude.body.velocity.x = 0
			this.dude.anims.play("turn",true)
		}
		if(this.cursors.up.isDown && this.dude.body.touching.down){
			
			this.dude.body.velocity.y = -gameOptions.dudeGravity / 1.6

		}
		//If die, restart
		if(this.dude.y > game.config.height || this.dude.y < 0){
			this.scene.start("OpeningScene")

		}


	}

}

class OpeningScene extends Phaser.Scene{
	constructor(){
		super("OpeningScene")
	}

	preload(){
		this.load.image("opening", require("../assets/openScene.png"))
	}
	create(){
		this.add.image(0,0, "opening").setOrigin(0)
		this.cursors = this.input.keyboard.createCursorKeys()
	}
	update(){
		if(this.cursors.left.isDown){
			this.scene.start("PlayGame")
		}else if(this.cursors.right.isDown){
			this.scene.start("HarderGame")
		}else if(this.cursors.up.isDown){
			this.scene.start("GuideScene")

		}
	}
}
class GuideScene extends Phaser.Scene{
	constructor(){
		super("GuideScene")
	}

	preload(){
		this.load.image("guidence", require("../assets/guide.png"))
	}
	create(){
		this.add.image(0,0, "guidence").setOrigin(0)
		this.cursors = this.input.keyboard.createCursorKeys()
	}
	update(){
		if(this.cursors.left.isDown){
			this.scene.start("PlayGame")
		}else if(this.cursors.right.isDown){
			this.scene.start("HarderGame")
		}
	}
}
class HarderGame extends Phaser.Scene{
	constructor() {
		super("HarderGame")
		this.score = 0
    	this.health = 100
		
	}
	preload(){
		this.load.audio("collect", require("../assets/collect.WAV"))
		this.load.audio("backgroundMusic", require("../assets/retro_music.mp3"))
		this.load.audio("die", require("../assets/impact.WAV"))
		this.load.audio("hit",require("../assets/hitEnemy.WAV"))
		this.load.audio("masterSound",require("../assets/wonGame.WAV"))
		this.load.image("ground", require("../assets/platform.png"))
    	this.load.image("hearth", require("../assets/hearth.png"))
		this.load.image("star", require("../assets/star.png"))
		this.load.image("redStar", require("../assets/redStar.png"))
		this.load.image("masterBall", require("../assets/masterBall.png"))
		this.load.image("badGuy", require("../assets/badGuy.png"))
		this.load.spritesheet("dude",require("../assets/dude.png"), {frameWidth: 32, frameHeigth: 48});
	}
	create(){
		this.groundGroup = this.physics.add.group({
			immovable: true,
			allowGravity: false
		})

		for(let i = 1 ; i < 20 ; i++){
			this.groundGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "ground");

		}
		//Dude
		this.dude = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, "dude")
		this.dude.body.gravity.y = gameOptions.dudeGravity
		this.physics.add.collider(this.dude, this.groundGroup)
		
		//Stars and colect sound
		this.starsGroup = this.physics.add.group({})
		this.physics.add.collider(this.starsGroup, this.groundGroup)
		this.physics.add.overlap(this.dude, this.starsGroup, this.collectStar, null , this)
		this.collectSound = this.sound.add("collect")

		//Redstars
		this.redStarsGroup = this.physics.add.group({})
		this.physics.add.collider(this.redStarsGroup, this.groundGroup)
		this.physics.add.overlap(this.dude, this.redStarsGroup, this.collectRedStar, null , this)
		
		//BadGuy
		this.enemiesGroup = this.physics.add.group({})
		this.physics.add.collider(this.enemiesGroup, this.groundGroup)
		this.physics.add.collider(this.dude, this.enemiesGroup, this.hitEnemy, null, this)
		this.hitEnemySound = this.sound.add("hit")

		//masterBall
		this.masterBall = this.physics.add.group({})
		this.physics.add.collider(this.masterBall, this.groundGroup)
		this.physics.add.collider(this.dude, this.masterBall, this.gameWon, null, this)
		this.gameWonSound = this.sound.add("masterSound")
		
		//Scoreboard and health
		this.add.image(16,16, "star")
		this.scoreText = this.add.text(32,10,"0", {fontsize: "35px", fill: "#ffffff"})
    	this.add.image(16,50, "hearth")
    	this.healthText = this.add.text(32,43,"100", {fontsize: "35px", fill: "#ffffff"})
		
		//GameOver
		this.gameOverText = this.add.text(400,400,"Game Over", {fontsize: "500px", fill: "#000000"})
		this.gameOverText.setOrigin(0.5)
		this.gameOverText.visible = false
		this.dieSound = this.sound.add("die")

		//BackgroundMussic
		this.bgMusic = this.sound.add("backgroundMusic")

		//game Won
		this.gameWonText=this.add.text(450,400,"Game Won", {fontsize: "500px", fill: "#000000"})
		this.gameWonText.visible = false
		
		//controls
		this.cursors = this.input.keyboard.createCursorKeys()

		//Dude walking animations
		this.anims.create({
			key: "left",
			frames: this.anims.generateFrameNumbers("dude",{start:0,end: 4}),
			frameRate: 10,
			repeat: -1
		})
		this.anims.create({
			key: "turn",
			frames: [{key: "dude", frame: 4}],
			frameRate: 10,
			
		})

		this.anims.create({
			key: "right",
			frames: this.anims.generateFrameNumbers("dude",{start:5,end: 9,}),
			frameRate: 10,
			repeat: -1
		})

		this.triggerTimer = this.time.addEvent({
			callback: this.addGround,
			callbackScope: this,
			delay: 700,
			loop: true
		})
	}


	addGround(){
		
		this.groundGroup.create(Phaser.Math.Between(0,game.config.width), 0, "ground")
		this.groundGroup.setVelocityY(gameOptions.dudeSpeed / 4)
		//this.bgMusic.play()
		
		//Falling stars and enemies
		if(Phaser.Math.Between(0, 1)) {
            this.starsGroup.create(Phaser.Math.Between(0, game.config.width), 0, "star")
			this.redStarsGroup.create(Phaser.Math.Between(0, game.config.width), 0, "redStar")
			this.enemiesGroup.create(Phaser.Math.Between(0, game.config.width),0, "badGuy")
            this.starsGroup.setVelocityY(gameOptions.dudeSpeed)
			this.enemiesGroup.setVelocityY(gameOptions.dudeSpeed)
			this.redStarsGroup.setVelocityY(gameOptions.dudeSpeed)
        }
		if(this.score >= 100){
			this.masterBall.create(Phaser.Math.Between(0, game.config.width),0, "masterBall")
			this.masterBall.setVelocityY(gameOptions.dudeSpeed)
		}
			

	}
	collectStar(dude, star) {
		star.disableBody(true, true)
		this.score += 3
		this.scoreText.setText(this.score)
		this.collectSound.play()
	}
	collectRedStar(dude, redStar) {
		redStar.disableBody(true, true)
		this.score += 10
		this.scoreText.setText(this.score)
		this.collectSound.play()
	}
	hitEnemy(dude, badGuy){
    	badGuy.disableBody(true,true)

    	this.health -= 20
		this.healthText.setText(this.health)
		this.hitEnemySound.play()

		if(this.health <= 0){
			this.dieSound.play()
			console.log("gameOver")
			this.physics.pause();
			gameOver = true;
			this.gameOverText.visible = true
		}
		//console.log("gameOver")
		//this.physics.pause();
		//gameOver = true;
		//this.gameOverText.visible = true
	}
	gameWon(dude, masterBall){
		console.log("You won the game")
		this.gameWonSound.play()
		this.physics.pause();
		gameOver = true;
		this.gameWonText.visible = true
	}	

	
	update() {
		//Controls
		if(this.cursors.left.isDown){
			this.dude.body.velocity.x = -gameOptions.dudeSpeed
			this.dude.anims.play("left",true)
		}
		else if(this.cursors.right.isDown){
			this.dude.body.velocity.x = gameOptions.dudeSpeed
			this.dude.anims.play("right",true)
		}
		else{
			this.dude.body.velocity.x = 0
			this.dude.anims.play("turn",true)
		}
		if(this.cursors.up.isDown && this.dude.body.touching.down){
			
			this.dude.body.velocity.y = -gameOptions.dudeGravity / 1.6

		}
		//If die, restart
		if(this.dude.y > game.config.height || this.dude.y < 0){
			this.scene.start("OpeningScene")

		}


	}


}
