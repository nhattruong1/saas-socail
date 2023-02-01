pipeline {
    agent none

    environment {
     DOCKER_IMAGE = "nhattruong1/saas-socail"
    }
    tools {
        nodejs "18.10.0"
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
//         stage('Deploy') {
//             steps {
//                 sh '<your-deployment-command>'
//             }
//         }
    }
}
