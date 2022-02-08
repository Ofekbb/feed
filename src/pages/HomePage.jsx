import React, { useState, useEffect } from 'react';

// Services

// import { taskService } from '../services/task.service.js'

export function HomePage() {
    const [isWorkerOn, setWorkerState] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
    }, [])


    // const loadTasks = async () => {
    //     const tasksFromService = await taskService.query()
    //     setTasks(tasksFromService)
    // }


    return (
        <section className="home-page">
        </section>
    )
}
