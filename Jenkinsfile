pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u 0:0 -v /temp:root/.cache'
        }
    }

    environment {
     DOCKER_IMAGE = "nhattruong1/saas-socail"
    }
    stages {
        stage('Install Dependencies') {
            when {
                changeset 'package.json'
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test Application') {
            steps {
                sh 'npm test'
                junit 'test-results/*.xml'
            }
        }
        stage('Deploy') {
            steps {
                sh '<your-deployment-command>'
            }
        }
    }
}
