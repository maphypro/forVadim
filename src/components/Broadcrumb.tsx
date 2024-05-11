import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation, useParams } from 'react-router-dom';

const Breadcrumb = () => {
    const { course_id, module_id, lesson_id, step_id } = useParams();

    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{
            width: '100%',
            height: '10%',
            backgroundColor: '#1f1f1f',
            color: 'white'
        }}>
            <Link color="inherit" to={`/course/${course_id}`} style={{
                color: 'white'
            }}>
                {course_id}
            </Link>
            {module_id && (
                <Link color="inherit" to={`/course/${course_id}/module/${module_id}`} style={{
                    color: 'white'
                }}>
                    {module_id}
                </Link>
            )}
            {lesson_id && (
                <Link
                    color="inherit"
                    to={`/course/${course_id}/module/${module_id}/lesson/${lesson_id}/step/${step_id}`}
                    style={{
                        color: 'white'
                    }}
                >
                    {step_id}
                </Link>
            )}
        </Breadcrumbs>
    );
};

export default Breadcrumb;