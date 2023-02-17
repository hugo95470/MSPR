pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                dir('./mobile_app') {
                    sh 'npm install' 
                }
            }
        }
    }
}
