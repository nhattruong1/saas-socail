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
        stage('test'){
            steps {
                sshagent(['cbe9f0a2-53bf-4af5-af10-4da00d2af44c']) {
                sh 'ssh -o StrictHostKeyChecking=no -l root 167.71.216.171 docker ps'
             }
            }
        }
//         stage('Install Dependencies') {
//             when {
//                 changeset 'package.json'
//             }
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Build Application') {
//             steps {
//                 sh 'npm run build'
//                 withDockerRegistry(credentialsId: 'dockerhub', url: '') {
//                     sh 'docker build -t saas-social:latest .'
//                     sh 'docker tag saas-social:latest truongvonhat/saas-social'
//                     sh 'docker push truongvonhat/saas-social'
//                 }
//             }
//         }
//         stage('Test Application') {
//             steps {
//                 sh 'npm test'
//                 junit 'test-results/*.xml'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 sshPublisher(publishers: [
//                     sshPublisherDesc(configName: 'social-server', sshCredentials: [encryptedPassphrase: '{AQAAABAAAAAQ8MYD+G1WDOXb3fI1ExeWkn2um8YLLHb7QHv+4r+HWns=}', key: '', keyPath: '', username: 'root'],
//                     transfers: [
//                       sshTransfer(execCommand: 'docker login -u $USERNAME -p $PASSWORD'),
//                       sshTransfer(execCommand: 'docker stop saas-service'),
//                       sshTransfer(execCommand: 'docker rm $(docker ps --filter status=exited -q)'),
//                       sshTransfer(execCommand: 'docker pull truongvonhat/saas-social:latest'),
//                       sshTransfer(execCommand: 'docker run -p 443:8000 --name saas-service -d truongvonhat/saas-social:latest')
//                     ],
//                     usePromotionTimestamp: false,
//                     useWorkspaceInPromotion: false,
//                     verbose: false
//                     )]
//                 )
//             }
//         }
    }
}
