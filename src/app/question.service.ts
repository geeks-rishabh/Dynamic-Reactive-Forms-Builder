import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { RadioQuestion } from './question-radio';

@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'profession',
        label: 'Profession',
        value: 'engineer',
        options: [
          { key: 'doctor', value: 'Doctor' },
          { key: 'engineer', value: 'Engineer' },
          { key: 'manager', value: 'Manager' },
          { key: 'teacher', value: 'Teacher' },
        ],
        order: 5,
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Rishabh',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: 'Awasthi',
        required: true,
        order: 2,
      }),

      new RadioQuestion({
        key: 'gender',
        label: 'Gender',
        value: 'Male',
        options: [
          { key: 'male', value: 'Male' },
          { key: 'female', value: 'Female' },
          { key: 'other', value: 'Other' },
        ],
        type: 'radio',
        required: true,
        order: 3,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        value: 'awasrishabh@gmail.com',
        order: 4,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
