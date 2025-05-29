// script.js
document.addEventListener('DOMContentLoaded', function() {
        const tablero = document.getElementById("tablero");
        const modal = document.getElementById("preguntaModal");
        const preguntaTexto = document.getElementById("preguntaTexto");
        const mensaje = document.getElementById("mensaje");
        const tiempoRestante = document.getElementById("tiempoRestante");

        const preguntas = [
            // DERIVADAS PARCIALES FÁCILES
            {
                texto: "Encuentra ∂f/∂x si f(x,y) = x² + 3y",
                respuesta: "∂f/∂x = 2x"
            },
            {
                texto: "Encuentra ∂f/∂y si f(x,y) = x² + 3y",
                respuesta: "∂f/∂y = 3"
            },
            {
                texto: "Calcula ∂f/∂x si f(x,y) = 5x + 2y²",
                respuesta: "∂f/∂x = 5"
            },
            {
                texto: "Calcula ∂f/∂y si f(x,y) = 5x + 2y²",
                respuesta: "∂f/∂y = 4y"
            },
            {
                texto: "Encuentra ∂f/∂x si f(x,y) = x³ + y",
                respuesta: "∂f/∂x = 3x²"
            },
            {
                texto: "Encuentra ∂f/∂y si f(x,y) = x³ + y",
                respuesta: "∂f/∂y = 1"
            },
            {
                texto: "Calcula ∂f/∂x si f(x,y) = xy + 4",
                respuesta: "∂f/∂x = y"
            },
            {
                texto: "Calcula ∂f/∂y si f(x,y) = xy + 4",
                respuesta: "∂f/∂y = x"
            },
            {
                texto: "Encuentra ∂f/∂x si f(x,y) = 2x²y",
                respuesta: "∂f/∂x = 4xy"
            },
            {
                texto: "Encuentra ∂f/∂y si f(x,y) = 2x²y",
                respuesta: "∂f/∂y = 2x²"
            },

            // CONCEPTOS BÁSICOS
            {
                texto: "¿Qué significa derivar parcialmente respecto a x?",
                respuesta: "Significa derivar tratando todas las demás variables como constantes"
            },
            {
                texto: "¿Cuál es el símbolo de derivada parcial?",
                respuesta: "∂ (delta o del)"
            },
            {
                texto: "En f(x,y) = x² + y², ¿cuántas variables independientes hay?",
                respuesta: "2 variables independientes: x e y"
            },
            {
                texto: "¿Qué es una función de varias variables?",
                respuesta: "Una función que depende de dos o más variables independientes"
            },

            // REGLA DE LA CADENA FÁCIL
            {
                texto: "Si z = x², x = 2t, encuentra dz/dt",
                respuesta: "dz/dt = 4t"
            },
            {
                texto: "Si z = y³, y = 3t, encuentra dz/dt",
                respuesta: "dz/dt = 27t²"
            },
            {
                texto: "Si w = xy, x = t, y = 2t, encuentra dw/dt",
                respuesta: "dw/dt = 4t"
            },

            // GRADIENTE FÁCIL
            {
                texto: "Encuentra ∇f si f(x,y) = x + y",
                respuesta: "∇f = (1, 1)"
            },
            {
                texto: "Calcula ∇f si f(x,y) = x² + y²",
                respuesta: "∇f = (2x, 2y)"
            },
            {
                texto: "Encuentra ∇f si f(x,y) = 3x + 2y",
                respuesta: "∇f = (3, 2)"
            },
            {
                texto: "¿Qué es el gradiente de una función?",
                respuesta: "Es el vector formado por todas las derivadas parciales"
            },
            {
                texto: "¿Cuántas componentes tiene ∇f si f(x,y)?",
                respuesta: "2 componentes: ∂f/∂x y ∂f/∂y"
            },

            // INTEGRALES DOBLES FÁCILES
            {
                texto: "Evalúa ∫∫ 1 dA sobre R = [0,1] × [0,1]",
                respuesta: "∫∫ 1 dA = 1 (área del cuadrado unitario)"
            },
            {
                texto: "Calcula ∫₀¹ ∫₀¹ 2 dy dx",
                respuesta: "∫₀¹ ∫₀¹ 2 dy dx = 2"
            },
            {
                texto: "Evalúa ∫₀² ∫₀¹ x dy dx",
                respuesta: "∫₀² ∫₀¹ x dy dx = 2"
            },
            {
                texto: "¿Qué representa ∫∫ 1 dA geométricamente?",
                respuesta: "Representa el área de la región R"
            },

            // LÍMITES FÁCILES
            {
                texto: "Calcula lim(x,y)→(0,0) (x + y)",
                respuesta: "lim(x,y)→(0,0) (x + y) = 0"
            },
            {
                texto: "Evalúa lim(x,y)→(1,2) xy",
                respuesta: "lim(x,y)→(1,2) xy = 2"
            },
            {
                texto: "Calcula lim(x,y)→(0,0) 5",
                respuesta: "lim(x,y)→(0,0) 5 = 5"
            },

            // CONTINUIDAD
            {
                texto: "¿Es continua f(x,y) = x + y en todo R²?",
                respuesta: "Sí, es continua en todo R²"
            },
            {
                texto: "¿Es continua f(x,y) = x² + y² en el origen?",
                respuesta: "Sí, es continua en el origen"
            },

            // DERIVADAS DIRECCIONALES FÁCILES  
            {
                texto: "Si ∇f = (2,3), ¿cuál es la derivada direccional máxima?",
                respuesta: "|∇f| = √(4+9) = √13"
            },
            {
                texto: "¿En qué dirección es máxima la derivada direccional?",
                respuesta: "En la dirección del gradiente"
            },

            // SUPERFICIES DE NIVEL
            {
                texto: "¿Qué es una curva de nivel?",
                respuesta: "Es el conjunto de puntos donde f(x,y) = c (constante)"
            },
            {
                texto: "Para f(x,y) = x² + y², ¿qué forma tienen las curvas de nivel?",
                respuesta: "Círculos centrados en el origen"
            },

            // OPERACIONES BÁSICAS
            {
                texto: "Si f(x,y) = x + y y g(x,y) = xy, calcula (f+g)(1,2)",
                respuesta: "(f+g)(1,2) = 3 + 2 = 5"
            },
            {
                texto: "Si f(x,y) = x², calcula f(3,5)",
                respuesta: "f(3,5) = 9"
            },
            {
                texto: "Si f(x,y) = xy, calcula f(2,4)",
                respuesta: "f(2,4) = 8"
            }
        ];

        let turno = "X";
        let celdas = [];
        let juegoActivo = false;
        let celdaSeleccionada = null;
        let temporizador = null;
        let tiempoLimite = 60; // 60 segundos
        let preguntaActual = null;
        let estadisticas = {
            partidasJugadas: 0,
            preguntasCorrectas: 0,
            puntosX: 0,
            puntosO: 0
        };

        // Crear partículas de fondo
        function crearParticulas() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 10 + 5 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 6 + 's';
                particlesContainer.appendChild(particle);
            }
        }

        document.getElementById("iniciarBtn").addEventListener("click", iniciarJuego);

        function iniciarJuego() {
            tablero.innerHTML = "";
            mensaje.innerHTML = "";
            celdas = Array(9).fill("");
            juegoActivo = true;
            turno = "X";
            actualizarInfoJugador();

            for (let i = 0; i < 9; i++) {
                const celda = document.createElement("div");
                celda.classList.add("celda");
                celda.dataset.index = i;
                celda.addEventListener("click", () => seleccionarCelda(i));
                tablero.appendChild(celda);
            }

            estadisticas.partidasJugadas++;
            actualizarEstadisticas();
            mostrarMensajeTemporal(`🎯 Turno del Grupo ${turno === "X" ? "1 (X)" : "2 (O)"}. ¡Selecciona una casilla!`, "mensaje-turno");
        }

        function seleccionarCelda(index) {
            if (!juegoActivo || celdas[index] !== "") return;
            celdaSeleccionada = index;
            mostrarPregunta();
        }

        function mostrarPregunta() {
            preguntaActual = preguntas[Math.floor(Math.random() * preguntas.length)];
            
            // Mostrar la pregunta Y la respuesta esperada para los líderes
            preguntaTexto.innerHTML = `
                <div class="pregunta-container">
                    <div class="pregunta-titulo">📝 PREGUNTA PARA GRUPO ${turno === "X" ? "1 (X)" : "2 (O)"}:</div>
                    <div class="pregunta-texto"><b>${preguntaActual.texto}</b></div><br>
                </div>
            `;
            
            modal.style.display = "flex";

            // Iniciar temporizador de 30 segundos
            let tiempo = tiempoLimite;
            tiempoRestante.textContent = tiempo + 's';
            temporizador = setInterval(() => {
                tiempo--;
                tiempoRestante.textContent = tiempo + 's';
                
                // Cambiar color cuando quedan pocos segundos
                if (tiempo <= 10) {
                    tiempoRestante.style.color = 'red';
                    tiempoRestante.style.fontWeight = 'bold';
                } else if (tiempo <= 20) {
                    tiempoRestante.style.color = '#fffb00';
                }
                
                if (tiempo <= 0) {
                    clearInterval(temporizador);
                    // Ya no cerramos automáticamente, solo cambiamos el texto
                    tiempoRestante.textContent = '¡Tiempo agotado!';
                    tiempoRestante.style.color = '#fffb00';
                    tiempoRestante.style.fontSize = '1.2em';
                }
            }, 1000);
        }

        function responder(evaluacionLideres) {
            clearInterval(temporizador);
            
            // Resetear estilos del temporizador
            tiempoRestante.style.color = '';
            tiempoRestante.style.fontWeight = '';
            tiempoRestante.style.fontSize = '';
            
            modal.style.display = "none";

            if (evaluacionLideres) {
                // Los líderes evaluaron como correcta
                estadisticas.preguntasCorrectas++;
                colocarFicha();
                estadisticas[turno === "X" ? "puntosX" : "puntosO"] += 10;
                mostrarMensajeTemporal(`✅ ¡Correcto! Grupo ${turno === "X" ? "1 (X)" : "2 (O)"} coloca su ficha.`, "mensaje-victoria");
            } else {
                // Los líderes evaluaron como incorrecta
                mostrarMensajeTemporal(`❌ ¡Incorrecto! Grupo ${turno === "X" ? "1 (X)" : "2 (O)"} pierde el turno.`, "mensaje-empate");
                cambiarTurno();
            }

            actualizarEstadisticas();
        }

        function colocarFicha() {
            celdas[celdaSeleccionada] = turno;
            const celda = tablero.children[celdaSeleccionada];
            celda.innerText = turno;
            celda.classList.add("ocupada");
            celda.classList.add(turno === "X" ? "simbolo-x" : "simbolo-o");

            if (verificarGanador()) {
                resaltarLinearGanadora();
                mostrarMensaje(`🎉 ¡Grupo ${turno === "X" ? "1 (X)" : "2 (O)"} gana la partida!`, "mensaje-victoria");
                juegoActivo = false;
            } else if (celdas.every(celda => celda !== "")) {
                mostrarMensaje("🤝 ¡Empate! Ambos grupos jugaron excelente.", "mensaje-empate");
                juegoActivo = false;
            } else {
                cambiarTurno();
                mostrarMensajeTemporal(`🎯 Turno del Grupo ${turno === "X" ? "1 (X)" : "2 (O)"}. ¡Selecciona una casilla!`, "mensaje-turno");
            }
        }

        function cambiarTurno() {
            turno = turno === "X" ? "O" : "X";
            actualizarInfoJugador();
        }

        function actualizarInfoJugador() {
            document.getElementById("infoX").classList.toggle("active", turno === "X");
            document.getElementById("infoO").classList.toggle("active", turno === "O");
        }

        function verificarGanador() {
            const lineasGanadoras = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
                [0, 4, 8], [2, 4, 6] // Diagonales
            ];

            for (let linea of lineasGanadoras) {
                const [a, b, c] = linea;
                if (celdas[a] && celdas[a] === celdas[b] && celdas[a] === celdas[c]) {
                    window.lineaGanadora = linea;
                    return true;
                }
            }
            return false;
        }

        function resaltarLinearGanadora() {
            if (window.lineaGanadora) {
                window.lineaGanadora.forEach(index => {
                    tablero.children[index].classList.add("celda-ganadora");
                });
            }
        }

        function mostrarMensaje(texto, clase) {
            mensaje.innerHTML = `<div class="mensaje-resultado ${clase}">${texto}</div>`;
        }

        function mostrarMensajeTemporal(texto, clase) {
            mostrarMensaje(texto, clase);
            setTimeout(() => {
                mensaje.innerHTML = "";
            }, 3000);
        }

        function actualizarEstadisticas() {
            document.getElementById("partidasJugadas").textContent = estadisticas.partidasJugadas;
            document.getElementById("preguntasCorrectas").textContent = estadisticas.preguntasCorrectas;
            document.getElementById("puntosX").textContent = estadisticas.puntosX;
            document.getElementById("puntosO").textContent = estadisticas.puntosO;
        }

        // Inicializar partículas al cargar la página
        crearParticulas();

        const audio = document.getElementById('musicaFondo');
        if (audio) {
            audio.volume = 0.05; // 5% del volumen

            document.body.addEventListener('click', function () {
                if (audio.paused) {
                    audio.play().catch(e => console.log('Audio no se pudo reproducir:', e));
                }
            });
        }

        // Hacer la función responder disponible globalmente
        window.responder = responder;
});
