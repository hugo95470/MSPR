pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                dir('./mobile_app') {
                    echo 'Building...'
                    sh 'cd mobile_app'
                    echo "PATH is: ${env.PATH}"
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}
