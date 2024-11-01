pipeline {
    agent any
    tools {
        nodejs 'Node 18' // Usa el nombre que configuraste en Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mrosetea/test-react-build'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instala dependencias
                sh 'npm install --production'
            }
        }
        stage('Test') {
                    steps {
                        sh 'npm run test -- --coverage'
                    }
                }
                stage('Verify Coverage') {
                    steps {
                        script {
                            def coverage = readJSON file: 'coverage/coverage-summary.json'
                            def globalCoverage = coverage.total.lines.pct
                            if (globalCoverage < 90) {
                                error("La cobertura de pruebas es inferior al 90%: ${globalCoverage}%")
                            } else {
                                echo "La cobertura de pruebas es suficiente: ${globalCoverage}%"
                            }
                        }
                    }
                }
        stage('Build') {
            steps {
                // Construye la aplicación
                sh 'npm run build'
            }
        }
        stage('Verify Build') {
             steps {
                sh 'ls -l build'
             }
        }
    }
    post {
        success {
            echo 'Build completado con éxito'
        }
        failure {
            echo 'Build fallido'
        }
    }
}
