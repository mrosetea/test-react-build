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
