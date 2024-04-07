import {v4 as uuidv4} from "uuid"

const dummyData =[
  {
    id:uuidv4(),
    title:"🗒️今からやること",
    tasks:[
      {
        id:uuidv4(),
        title: "Reactの学習"
      },
      {
        id:uuidv4(),
        title:"Youtube tutorial消化"
      },
      {
        id:uuidv4(),
        title:"running"
      }
    ]
  },
  {
    id:uuidv4(),
    title:"💪やってる最中",
    tasks:[
      {
        id:uuidv4(),
        title: "Hackathon"
      },
      {
        id:uuidv4(),
        title:"転職活動"
      },
      {
        id:uuidv4(),
        title:"メンタルトレーニング"
      }
    ]
  },
  {
    id:uuidv4(),
    title:"🍵終わったこと",
    tasks:[
      {
        id:uuidv4(),
        title: "加速器運転員としてのキャリア"
      },
      {
        id:uuidv4(),
        title:"信頼関係"
      },
      {
        id:uuidv4(),
        title:"✨希望を見つけること"
      }
    ]
  }
]

export default dummyData;