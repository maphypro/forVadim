export interface Course {
    id: number;
    title: string;
    image: string;
    description: string;
}

export interface Module {
    id: number;
    courseId: number;
    sequenceNumber: number;
    name: string;
    description: string;
}

export interface Lesson {
    id: number;
    moduleId: number;
    sequenceNumber: number;
    name: string;
}




export interface Step<T extends 'text' | 'video' | 'test'> {
    id: number;
    lessonId: number;
    sequenceNumber: number;
    name: string;
    type: T;
    content: T extends 'text' ? TextStepContent :
    T extends 'test' ? TestStepContent :
    T extends 'video' ? VideoStepContent :
    never;
}

export interface TextStep extends Step<'text'> {
    content: TextStepContent;
}

export interface VideoStep extends Step<'video'> {
    content: VideoStepContent;
}

export interface TestStep extends Step<'test'> {
    content: TestStepContent;
}

export interface TextStepContent {
    text: string;
}

export interface VideoStepContent {
    url: string;
}

export interface TestStepContent {
    testBlocks: TestBlockType[];
}

export interface TestBlockType {
    id: number;
    answersCount: number;
    question: string;
    answers: string[];
}

