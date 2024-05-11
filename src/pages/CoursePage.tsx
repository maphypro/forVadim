import { Box, List } from '@mui/material';
import React from 'react';
import { Link, useMatch, useParams, useRoutes } from 'react-router-dom';
import { Module } from '../types/Course.types';
import Header from '../components/Header';
import ModuleCard from '../components/ModuleCard';
import Breadcrumb from '../components/Broadcrumb';

const CoursePage = () => {

    const modulesList: Module[] = [
        {
            id: 1,
            courseId: 1,
            sequenceNumber: 1,
            name: 'Вводная информация',
            description: 'Знакомство с курсом',
        },
        {
            id: 2,
            courseId: 1,
            sequenceNumber: 2,
            name: 'Оформление бровей',
            description: 'Первая теория по бровям!',
        },
        {
            id: 3,
            courseId: 1,
            sequenceNumber: 3,
            name: 'Повторение - мать учения',
            description: 'Типа повторяем то да сё',
        }
    ];

    const { course_id } = useParams();

    const courseId: string = course_id || '-1';



    return (
        <Box sx={{
            width: '100%',
            height: '100%'
        }}>
            <Header />
            <Breadcrumb />

            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: '80%'
                }}>
                    <List>
                        {
                            modulesList.map(module => {
                                return (
                                    <Link to={`module/${module.id}`}>
                                        <ModuleCard name={module.name}
                                            description={module.description}
                                            lessonsCount={3}
                                            testsCount={1}
                                            key={module.id}
                                        />
                                    </Link>
                                );
                            })
                        }
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default CoursePage;