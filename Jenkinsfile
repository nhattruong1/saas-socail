pipeline {
    agent any
    tools {
        nodejs "18.10.0"
    }
    environment {
        DOCKER_IMAGE = "nhattruong1/saas-socail"
        DOCKER_CREDENTIALS = credentials('docker-hub-account')
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
        stage('Deploy') {
            steps {
                sshagent(['ssh-key']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l root 167.71.216.171 docker login -u $DOCKER_CREDENTIALS_USR -p $DOCKER_CREDENTIALS_PSW'
                    sh 'ssh -o StrictHostKeyChecking=no -l root 167.71.216.171 docker pull truongvonhat/saas-social:latest'
                    sh 'ssh -o StrictHostKeyChecking=no -l root 167.71.216.171 cd /var/deploy;docker compose down'
                    sh 'ssh -o StrictHostKeyChecking=no -l root 167.71.216.171 cd /var/deploy;docker compose up -d'
                }
            }
        }
    }
}
