  const questions = [
            "Will you be my Valentine? 💕",
            "Would you grace me with your presence on a romantic date? 🌹",
            "May I have the honor of taking you to dinner under the stars? 🍽️✨",
            "Will you let me hold your hand through all of life's adventures? 🤝",
            "Would you consider spending forever with me? 💍"
        ];

        const quotes = [
            '"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine." - Maya Angelou',
            '"I would rather share one lifetime with you than face all the ages of this world alone." - J.R.R. Tolkien',
            '"You are my today and all of my tomorrows." - Leo Christopher',
            '"I love you not only for what you are, but for what I am when I am with you." - Elizabeth Barrett Browning',
            '"Whatever our souls are made of, yours and mine are the same." - Emily Brontë'
        ];

        let currentQuestion = 0;
        const noBtn = document.getElementById('noBtn');
        let noClicked = false;

        // Create background particles
        function createBackgroundParticles() {
            const particles = ['❤️', '💕', '🌹', '✨', '💝'];
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
                particle.style.left = Math.random() * window.innerWidth + 'px';
                particle.style.top = Math.random() * window.innerHeight + 'px';
                particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
                particle.style.animationDelay = Math.random() * 5 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                document.body.appendChild(particle);
            }
        }

        createBackgroundParticles();

        // No button mouseover effect
        noBtn.addEventListener("mouseover", () => {
            if (!noClicked) {
                const x = Math.random() * 200 - 100;
                const y = Math.random() * 200 - 100;
                noBtn.style.transform = `translate(${x}px, ${y}px)`;
            }
        });

        // No button click handler
        noBtn.addEventListener("click", () => {
            if (!noClicked) {
                noClicked = true;
                
                // Change question to "Sorry, Let me try again"
                const questionEl = document.getElementById('question');
                const originalQuestion = questionEl.textContent;
                
                questionEl.style.opacity = '0';
                setTimeout(() => {
                    questionEl.innerHTML = '<span class="sorry-message">Ohh, Sorry, Let me try again 🥺</span>';
                    questionEl.style.opacity = '1';
                }, 300);

                // Disable the No button
                noBtn.classList.add('disabled');
                noBtn.style.transform = 'translate(0, 0)';
                
                // Make Yes button bigger and more prominent
                const yesBtn = document.querySelector('.yes-btn');
                yesBtn.style.transform = 'scale(1.3)';
            }
        });
        function handleYes() {
            currentQuestion++;
            
            if (currentQuestion < questions.length) {
                // Update question with animation
                const questionEl = document.getElementById('question');
                questionEl.style.opacity = '0';
                questionEl.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    questionEl.innerHTML = questions[currentQuestion];
                    document.querySelector('.romantic-quote').textContent = quotes[currentQuestion];
                    questionEl.style.transition = 'all 0.5s ease';
                    questionEl.style.opacity = '1';
                    questionEl.style.transform = 'translateY(0)';
                }, 300);

                // Create celebration
                createCelebration();
                
                // Reset No button state
                noClicked = false;
                noBtn.classList.remove('disabled');
                noBtn.style.transform = 'translate(0, 0)';

                // Reset Yes button size
                const yesBtn = document.querySelector('.yes-btn');
                yesBtn.style.transform = 'scale(1)';
            } else {
                // All questions answered - show final message
                showFinalMessage();
            }
        }

        function createSparkle(x, y) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.innerHTML = '✨';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.fontSize = (Math.random() * 20 + 15) + 'px';
            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }

        function createCelebration() {
            // Create hearts
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    createHeart();
                }, i * 80);
            }

            // Create balloons
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    createBalloon();
                }, i * 120);
            }

            // Create sparkles
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * window.innerHeight;
                    createSparkle(x, y);
                }, i * 50);
            }
        }

        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = ['❤️', '💕', '💖', '💗', '💓', '💝', '💞'][Math.floor(Math.random() * 7)];
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.bottom = '-60px';
            heart.style.fontSize = (Math.random() * 40 + 25) + 'px';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }

        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.innerHTML = ['🎈', '🎀', '🌹'][Math.floor(Math.random() * 3)];
            balloon.style.left = Math.random() * window.innerWidth + 'px';
            balloon.style.bottom = '-60px';
            balloon.style.setProperty('--drift', (Math.random() * 300 - 150) + 'px');
            document.body.appendChild(balloon);

            setTimeout(() => {
                balloon.remove();
            }, 3000);
        }

        function showFinalMessage() {
            // Hide container
            document.querySelector('.container').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.container').style.display = 'none';
            }, 500);

            // Create massive celebration
            for (let i = 0; i < 80; i++) {
                setTimeout(() => {
                    createHeart();
                    if (i % 2 === 0) createBalloon();
                    if (i % 3 === 0) createSparkle(
                        Math.random() * window.innerWidth,
                        Math.random() * window.innerHeight
                    );
                }, i * 40);
            }

            // Show success message
            setTimeout(() => {
                const successMsg = document.createElement('div');
                successMsg.classList.add('success-message');
                successMsg.innerHTML = `
                    <h2>Forever Yours! 🎉💕</h2>
                    <p>You've made me the happiest person alive!</p>
                    <p style="margin-top: 20px; font-size: 3em;">💖✨🎈💍🌹</p>
                    <p class="love-message">I promise to cherish you always and forever!</p>
                    <p style="margin-top: 15px; color: #999; font-size: 0.95em; font-style: italic;">
                        "You are my sun, my moon, and all of my stars."<br>- E.E. Cummings
                    </p>
                `;
                document.body.appendChild(successMsg);
            }, 300);
        }

        // Add continuous romantic ambiance
        setInterval(() => {
            if (currentQuestion < questions.length && document.querySelector('.container').style.display !== 'none') {
                createHeart();
                if (Math.random() > 0.7) {
                    createSparkle(
                        Math.random() * window.innerWidth,
                        Math.random() * window.innerHeight * 0.3
                    );
                }
            }
        }, 2500);