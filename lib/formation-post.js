import fs from 'fs'
import matter from 'gray-matter';
import path from 'path'

const trainingDirectory = path.join(process.cwd(), 'content/formations')

export function getSortedTrainingData(){

    const formations = fs.readdirSync(trainingDirectory);




    const data = formations.map((formation)=>{
    
    const idTraining = formation.replace(/\.md$/, '')

    const fullPath = path.join(trainingDirectory, formation);
    
    const rawContent = fs.readFileSync(fullPath, "utf-8");

   const matterResult = matter(rawContent)
    return {
        idTraining,
        ...matterResult.data
    }})
    return data.sort((a,b) =>{
        if(a.data < b.data){
            return 1
        } else{
            return -1
        }
    })
}

export function getAllTrainingId(){

    const fileNames = fs.readdirSync(trainingDirectory)

    return fileNames.map(fileName => {
        return{
            params: {
                formation : fileName.replace(/\.md$/, '')
            }
        }   
    })
}

export function getTrainingData(formation){

    const fullPath = path.join(trainingDirectory, `${formation}.md`)

    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContent)
    
    return {
        formation,
        ...matterResult.data

    }
}