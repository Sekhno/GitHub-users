import { Component, OnInit, OnDestroy, ElementRef, AfterContentInit } from '@angular/core';
import { GithubService } from '@app/service/github.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { UserInterface } from '@app/models/users';
import gsap from 'gsap';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

declare const SplitText: any;

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [GithubService]
})

export class UsersComponent implements OnInit, OnDestroy, AfterContentInit  {
    public userArray: Observable<UserInterface[]>;
    constructor(private githubService: GithubService, private router: Router, private route: ActivatedRoute) { }

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
            .to(splitText.words, { duration: 0.1, color: "#70B100", scale: 0.9, stagger: 0.1 }, "words")
            .to(splitText.words, { duration: 0.2, color: "black", scale: 1, stagger: 0.1 }, "words+=0.1");
        splitTextTimeline.play().then(result => {
            splitTextTimeline.clear().time(0);
            splitText.revert();
            result.kill();
        });
    }

    public onOverImage = (title: ElementRef) => {
        var splitText = new SplitText(title, { type: 'chars, words'}),
        splitTextTimeline = gsap.timeline();

        gsap.set(title, {perspective: 400});
        splitTextTimeline.from(splitText.chars, { duration: 0.6, scale: 4, autoAlpha: 0, rotationX: -180, transformOrigin: "100% 50%", ease: "back.out", stagger: 0.02 });
        splitTextTimeline.play().then(result => {
            splitTextTimeline.clear().time(0);
            splitText.revert();
            result.kill();
        });
    }

    public selectedUser = (user: UserInterface, elem: Element) => {
        let profileWrap = document.createElement('div'),
            copiedProfile = elem.cloneNode(true),
            profileRect: DOMRect = elem.getBoundingClientRect();
        
        (copiedProfile as HTMLElement).removeAttribute('style');
        (copiedProfile as HTMLElement).setAttribute('style', 'margin: 0;');
        (copiedProfile as HTMLElement).id = 'clone-item';
        profileWrap.setAttribute('style', 
            'z-index: 9999;' +
            'position: fixed;' +
            'width:' + profileRect.width + 'px;' +
            'height:' + profileRect.height + 'px;' + 
            'top:' + profileRect.top + 'px;' +
            'left:' + profileRect.left + 'px;'
        );
        
        profileWrap.appendChild(copiedProfile);
        document.body.appendChild(profileWrap);

        gsap.fromTo('#users-section', {autoAlpha: 1}, {autoAlpha: 0, duration: 1});

        setTimeout(() => this.router.navigate(['user', user.login], { relativeTo: this.route }), 1000);
    }
}