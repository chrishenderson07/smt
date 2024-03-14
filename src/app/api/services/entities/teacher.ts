import prisma from "../../../../../prisma/client";
import {Prisma, Teacher } from "@prisma/client";

export interface ITeacher{
    data: Teacher
}

export async function getTeacherById(id:string) {
    return await prisma.teacher.findUnique({
        where: {
            id: id
        }
    });
}

export async function getTeachers(options?: Prisma.TeacherFindManyArgs) {
    return await prisma.teacher.findMany(options)
}


export async function FilterTeacher() {
  
}



