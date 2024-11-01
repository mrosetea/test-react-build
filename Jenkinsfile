pipeline {
    agent any
    tools {
        nodejs 'Node 18' // Reemplaza con el nombre de tu configuración de NodeJS
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mrosetea/test-react-build'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test -- --coverage --watchAll=false'
            }
        }
        stage('Verify Coverage') {
            steps {
                script {
                    // Lee el archivo coverage-summary.json
                    def coverageData = readJSON file: 'coverage/coverage-summary.json'

                    // Obtén el porcentaje de cobertura de líneas global
                    def globalLineCoverage = coverageData.total.lines.pct
                    def globalFunctionCoverage = coverageData.total.functions.pct
                    def globalBranchCoverage = coverageData.total.branches.pct

                    // Verifica si la cobertura es inferior al umbral
                    def minimumCoverage = 90
                    if (globalLineCoverage < minimumCoverage || globalFunctionCoverage < minimumCoverage || globalBranchCoverage < minimumCoverage) {
                        error("La cobertura de pruebas es inferior al ${minimumCoverage}%: líneas ${globalLineCoverage}%, funciones ${globalFunctionCoverage}%, ramas ${globalBranchCoverage}%")
                    } else {
                        echo "La cobertura de pruebas cumple el mínimo requerido: líneas ${globalLineCoverage}%, funciones ${globalFunctionCoverage}%, ramas ${globalBranchCoverage}%"
                    }
                }
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
