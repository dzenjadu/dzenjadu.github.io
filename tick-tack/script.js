window.onload = function() {
	//"use strict";

	class TickTack {
		constructor(gridSize = 3) {
			this.gameField;
			this.buttonsGrid;
			this.gameMessage; 
			this.buttunReset; 
			this.itemsField;

			this.gridSize = gridSize;
			this.countItems = Math.pow(this.gridSize, 2);

			this.winCombinations = this.createWinCombinations();

			this.players = {
				x: 'x', 
				o: 'o'
			};
			this.player = this.players.x;
			
			this.moveCount = 0;

			this.getGame = function() {
				if (!this.gameField) {
					this.render();
					this.actions();
					return this.gameField;
				}
			}
		}

		actions() {
			this.gameField.addEventListener('click', (e) => {
				if (e.target.className === 'game-item') {

					if (this.checkWin()) return;

					if (e.target.textContent === '') {
						e.target.innerHTML = this.player;
						e.target.classList.add(this.player);

						if (this.checkWin()) return;
						this.moveCount++;
						this.changePlayer();
						this.changeMessage();
					}
				}

				if (e.target.className === 'game-reset') {
					this.gameReset();
				}

				if (e.target.className === 'size-field') {
					this.gameReset();
					this.gridSize = e.target.dataset.class;
					this.countItems = Math.pow(this.gridSize, 2);

					let gameButton = document.getElementsByClassName('size-field');
					for (var i = 0; i < gameButton.length; i++) {
						gameButton[i].classList.remove('button-active');
					}
					e.target.classList.add('button-active');

					this.renderItems();
					this.winCombinations = this.createWinCombinations();
				}
			});
		}

		gameReset() {
			let gameItem = document.getElementsByClassName('game-item');

			for (var i = 0; i < gameItem.length; i++) {
				gameItem[i].innerHTML = '';
				gameItem[i].classList.remove('x');
				gameItem[i].classList.remove('o');
			}

			this.changePlayer();

			this.gameMessage.classList.remove('message-won');
			this.gameMessage.innerHTML = 'Ходит: ' + this.player;

			this.moveCount = 0;
		}

		changePlayer() {
			this.player = (this.player === this.players.x) ? this.players.o : this.players.x;
		}

		changeMessage(winer) {
			if (this.moveCount !== 1 && this.moveCount === this.countItems) {
				this.gameMessage.textContent = 'Ничья :)';
				this.gameMessage.classList.add('message-won');
				return;
			}

			if (winer) {
				this.gameMessage.textContent = 'Победили: ' + winer;
				this.gameMessage.classList.add('message-won');
				return;
			}

			this.gameMessage.textContent = 'Ходит: ' + this.player;
		}

		checkWin() {
			let gameItem = document.getElementsByClassName('game-item');
			let counK = 0;
			let isWinCount = 0;

			for (let i = 0; i < gameItem.length - 1; i++) {
				for (let j = 0; j < this.winCombinations.length; j++) {

					if (counK == j) {
						for (var k = 0; k < this.winCombinations[j].length; k++) {

							if (gameItem[this.winCombinations[j][k]].textContent === this.player) {
								isWinCount++;

								if (isWinCount == this.gridSize) {
									this.changeMessage(this.player);
									return this.player;
								}							
							}
						}	
						counK++;
						isWinCount = 0;
					}

				}

			}
			return false;
		}

		createWinCombinations() {
			let winComb = [];
			let winCombRow = [];

			// horizontal
			for (let i = 0, count = this.countItems; i < this.gridSize; i++) {
				for (let j = 0; j < this.gridSize; j++) {
					winCombRow.push(count - 1);
					count--;
				}
				winComb.push(winCombRow);
				winCombRow = [];
			}

			//vertical
			for (let i = 0, count = this.countItems, step = 0; i < this.gridSize; i++) {
				for (let j = 0; j < this.gridSize; j++) {
					if (count === 0) {
						count = this.countItems;
						step++;
					}
					winCombRow.push(count - step - 1);
					count -= this.gridSize;
				}
				winComb.push(winCombRow);
				winCombRow = [];
			}

			//diagonal1
			for (let j = 0, count = this.countItems, stepDiag = 0; j < this.gridSize; j++) {
				winCombRow.push(count - stepDiag - 1);
				stepDiag++;
				count -= this.gridSize;
			}
			winComb.push(winCombRow);
			winCombRow = [];

			//diagonal2
			for (let j = 0, count = this.countItems, stepDiag = 1; j < this.gridSize; j++) {
				winCombRow.push(count - this.gridSize + stepDiag - 1);
				stepDiag++;
				count -= this.gridSize;
			}
			winComb.push(winCombRow);
			winCombRow = [];

			return winComb;
		}

		render() {
			this.gameField = document.createElement('div');
			this.gameField.className = 'game-field';

			this.renderTitle();
			this.renderButtonsGrid();

			this.itemsField = document.createElement('div');
			this.itemsField.className = 'game-items';
			this.gameField.appendChild(this.itemsField);

			this.renderItems();
			this.renderMessage();
			this.renderButtonReset();
		}

		renderTitle() {
			let gameTitle = document.createElement('h1');
			gameTitle.className = 'game-title';
			gameTitle.textContent = 'Игра крестики-нолики';
			this.gameField.appendChild(gameTitle);
		}

		renderItems() {
			if (this.itemsField.innerHTML) this.itemsField.innerHTML = '';
			//add items
			for (var i = 0; i < this.countItems; i++) {
				var item = document.createElement('div');
				item.className = 'game-item';
				item.setAttribute('data-item', i);
				this.itemsField.appendChild(item);
			}
			this.itemsField.style.width = 52 * this.gridSize + "px";
		}

		renderMessage() {
			this.gameMessage = document.createElement('div');
			this.gameMessage.className =  'message';
			this.gameMessage.textContent = 'Ходит: ' + this.player;
			this.gameField.appendChild(this.gameMessage);
		}

		renderButtonReset() {
			this.buttunReset = document.createElement('button');
			this.buttunReset.className = 'game-reset';
			this.buttunReset.textContent = 'Играть еще!';
			this.gameField.appendChild(this.buttunReset);
		}

		renderButtonsGrid() {
			this.buttonsGrid = document.createElement('div');
			this.buttonsGrid.className = 'game-buttons';
			this.gameField.appendChild(this.buttonsGrid);

			for (let i = 2; i < 10; i++) {
				let button = document.createElement('button');
				button.classList.add('size-field');
				button.setAttribute('data-class', i);

				button.textContent = i + 'x' + i;
				this.buttonsGrid.appendChild(button);

				if (i == 3) button.classList.add('button-active');
			}
		}
	}

	let game = new TickTack();
	let gameField = document.getElementsByClassName('game')[0];

	gameField.appendChild(game.getGame());

}