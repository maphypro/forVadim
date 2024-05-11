import { Box, List } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import { Lesson, Step, TestStep, TextStep, TextStepContent, VideoStep } from '../types/Course.types';
import LessonCard from '../components/LessonCard';
import Breadcrumb from '../components/Broadcrumb';

const ModulePage = () => {

    const lessonsList: Lesson[] = [
        {
            id: 1,
            moduleId: 1,
            sequenceNumber: 1,
            name: 'Коррекция'
        },
        {
            id: 2,
            moduleId: 1,
            sequenceNumber: 2,
            name: 'Окрашивание'
        },
        {
            id: 3,
            moduleId: 1,
            sequenceNumber: 3,
            name: 'Экзамен'
        },
    ]

    const stepsList: (TextStep | VideoStep | TestStep)[] = [
        {
            id: 1,
            lessonId: 1,
            sequenceNumber: 1,
            name: 'Подготовка',
            type: 'video',
            content: { url: 'keklol' }
        },
        {
            id: 2,
            lessonId: 1,
            sequenceNumber: 1,
            name: 'Материалы',
            type: 'text',
            content: { text: 'keklol' }
        },
        {
            id: 3,
            lessonId: 1,
            sequenceNumber: 1,
            name: 'Метод коррекции',
            type: 'text',
            content: { text: 'keklol' }
        },
        {
            id: 4,
            lessonId: 2,
            sequenceNumber: 1,
            name: 'Подготовка',
            type: 'text',
            content: { text: 'keklol' }
        },
        {
            id: 5,
            lessonId: 2,
            sequenceNumber: 1,
            name: 'Материалы',
            type: 'text',
            content: { text: 'keklol' }
        },
        {
            id: 6,
            lessonId: 3,
            sequenceNumber: 1,
            name: 'Повторение',
            type: 'video',
            content: { url: 'keklol' }
        },
    ];



    return (
        <Box sx={{
            width: '100%',
        }}>
            <Header />
            <Breadcrumb />
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: '80%',
                    mt: 4
                }}>
                    {
                        lessonsList.map((lesson, index) => {
                            return (
                                <LessonCard name={lesson.name} completed={index%2==1} id={lesson.id} steps={stepsList} key={lesson.id}/>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default ModulePage;