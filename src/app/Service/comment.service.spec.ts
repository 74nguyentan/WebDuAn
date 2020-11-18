import { Comment } from './../model/Comment';
import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';

describe('Commentservice', () => {
  let service: CommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
