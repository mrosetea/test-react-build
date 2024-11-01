pipeline {
    agent any
    tools {
        nodejs 'Node 18' // Usa el nombre que configuraste en Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                // Clona el código desde tu repositorio
                git 'https://github.com/mrosetea/test-react-build.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instala dependencias
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Construye la aplicación
                sh 'npm run build'
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
