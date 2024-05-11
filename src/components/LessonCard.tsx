import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Step } from '../types/Course.types';
import StepCard from './StepCard';
import { Link } from 'react-router-dom';
type LessonCardProps = {
    name: string,
    completed: boolean,
    id: number,
    steps: Step<'video' | 'text' | 'test'>[]
}

const LessonCard = ({ name, completed, id, steps }: LessonCardProps) => {


    let stepsForThisLesson = steps.filter(step => step.lessonId === id)

    return (
        <Accordion
            disableGutters
            sx={{
                border: '1px solid #7d7d7d',
                mb: 1,
                p: 0,
            }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"

                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: '700',
                    flexGrow: 10,
                    lineHeight: '45px',

                }}>
                    {name}
                </Typography>
                {
                    completed && (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '45px',
                            width: '45px',

                        }}>
                            <CheckCircleRoundedIcon sx={{
                                color: '#009700',
                                height: '25px',
                                width: '25px',

                            }} />
                        </Box>
                    )
                }
            </AccordionSummary>
            <AccordionDetails sx={{
            }}>
                {
                    stepsForThisLesson.map((step, index) => {
                        return (
                            <Link to={`lesson/${id}/step/${step.id}`}>
                                <StepCard id={step.id} name={step.name} completed={index % 2 == 1} key={step.id} />
                            </Link>
                        )
                    })
                }
            </AccordionDetails>
        </Accordion>
    );
};

export default LessonCard;