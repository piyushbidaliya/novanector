import React, { useEffect, useState } from 'react'
import UserBanner from './UserBanner'
import CreateCourse from './CreateCourse'
import AddModule from './AddModule'
import { useLocation } from 'react-router-dom';
import AddLesson from './AddLesson';
import AddQuiz from './AddQuiz';
import AddAssignment from './AddAssignment';


function UserBannerWrapper() {
    const [showCreateCourse, setShowCreateCourse] = useState(false)
    const [showAddModule, setShowAddModule] = useState(false)
    const [showAddLesson, setShowAddLesson] = useState(false)
    const [showAddQuiz, setShowAddQuiz] = useState(false)
    const [showAddAssignment, setShowAddAssignment] = useState(false)

    const location = useLocation();
    useEffect(() => {
      setShowCreateCourse(false);
    }, [location.pathname]);
    
  return (
    <>
        <UserBanner onOpenCreateCourse={() => setShowCreateCourse(true)} />
        {showCreateCourse && (
        <CreateCourse
            close={() => setShowCreateCourse(false)}
            onOpenAddModule={() => setShowAddModule(true)}
            onOpenAddLesson={() => setShowAddLesson(true)}
            onOpenAddQuiz={() => setShowAddQuiz(true)}
            onOpenAddAssignment={() => setShowAddAssignment(true)}
        />
        )}
        {showAddModule && <AddModule close={() => setShowAddModule(false)} />}
        {showAddLesson && <AddLesson close={() => setShowAddLesson(false)} />}
        {showAddQuiz && <AddQuiz close={() => setShowAddQuiz(false)} />}
        {showAddAssignment && <AddAssignment close={() => setShowAddAssignment(false)}/>}
    </>
  )
}

export default UserBannerWrapper
