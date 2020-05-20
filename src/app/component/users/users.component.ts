import { Component, OnInit, OnDestroy, ElementRef, AfterContentInit } from '@angular/core';
import { GithubService } from '@app/service/github.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { UserInterface } from '@app/models/users';
import gsap from "gsap";

declare const SplitText: any;

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [GithubService]
})

export class UsersComponent implements OnInit, OnDestroy, AfterContentInit  {
    public userArray: Observable<UserInterface[]>;
    constructor(private githubService: GithubService) { }

    ngOnInit():void {
        this.userArray = this.githubService.initGithubUsers().pipe(map((users: UserInterface[]) => users));
    }

    ngOnDestroy(): void {}

    ngAfterContentInit(): void {
        let titleRef = document.getElementById('title'),
        splitText = new SplitText(titleRef, { type: 'chars, words, lines' }),
        splitTextTimeline = gsap.timeline();;
        gsap.set(titleRef, { perspective: 400 });
        splitTextTimeline.from(splitText.chars, { duration: 0.2, autoAlpha: 0, scale: 4, force3D: true, stagger: 0.01 }, 0.5)
            .to(splitText.words, { duration: 0.1, color: "#8FE402", scale: 0.9, stagger: 0.1 }, "words")
            .to(splitText.words, { duration: 0.2, color: "black", scale: 1, stagger: 0.1 }, "words+=0.1");
        splitTextTimeline.play();
    }

    public onLoadImage = (title: ElementRef) => {
        var splitText = new SplitText(title, { type: 'chars, words'}),
        splitTextTimeline = gsap.timeline();

        gsap.set(title, {perspective: 400});
        splitTextTimeline.from(splitText.chars, { duration: 0.6, scale: 4, autoAlpha: 0, rotationX: -180, transformOrigin: "100% 50%", ease: "back.out", stagger: 0.02 });
        splitTextTimeline.play();
    }


}