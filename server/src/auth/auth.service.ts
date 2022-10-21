import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class AuthService {
    async registration(createUserDto: CreateUserDto) {

    }

    async login(createUserDto: CreateUserDto) {
    }
}
