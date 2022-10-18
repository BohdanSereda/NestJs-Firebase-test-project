import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { firebaseAuth } from '../firebase/helpers/firebase-config.helper';
import {signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class AuthService {
    async registration(createUserDto: CreateUserDto) {

    }

    async login(createUserDto: CreateUserDto) {
        signInWithEmailAndPassword(firebaseAuth, createUserDto.email, createUserDto.password)
    }
}
