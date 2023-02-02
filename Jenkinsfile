pipeline {
    agent any
    tools {
        nodejs "18.10.0"
    }
    environment {
     DOCKER_IMAGE = "nhattruong1/saas-socail"
    }
    stages {
        stage('Checking') {
            steps {
                sh 'npm version'
            }
        }
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
                withDockerRegistry(credentialsId: 'dockerhub', url: '') {
                    sh 'docker build -t saas-social:latest .'
                    sh 'docker tag saas-social:latest truongvonhat/saas-social'
                    sh 'docker push truongvonhat/saas-social'
                }
            }
        }
//         stage('Test Application') {
//             steps {
//                 sh 'npm test'
//                 junit 'test-results/*.xml'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 sh '<your-deployment-command>'
//             }
//         }
    }
}
