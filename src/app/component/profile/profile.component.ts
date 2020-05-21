import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubService } from '@app/service/github.service';
import { ProfileInterface } from '@app/models/profile';
import { gsap } from 'gsap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare const SplitText: any;

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [GithubService],
})

export class ProfileComponent implements OnInit, OnDestroy, AfterContentChecked {
    private showedAnimationTitle = false;
    private routeSubscription: Subscription;
    public profile: ProfileInterface;
    public safeSrc: SafeResourceUrl = null;
    constructor(private route: ActivatedRoute, private githubService: GithubService, private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe((res: {id: string}) => {
            setTimeout(() =>{
                this.githubService.initGithubUserBy(res.id).subscribe((user: ProfileInterface) => {
                    console.log(user);
                    this.profile = user;
                    this.getSafeResourceUrl();
                    let cardItem = document.getElementById('profile-item');
                    if (cardItem) {
                        let cardRect = cardItem.getBoundingClientRect(),
                            cloneCard = document.getElementById('clone-item');

                        if (cloneCard) {
                            gsap.fromTo(cloneCard.parentElement, {}, { top: cardRect.top, left: cardRect.left, duration: 1}).then(result => {
                                result.kill();
                                cloneCard.parentElement.parentElement.removeChild(cloneCard.parentElement);
                                cardItem.style.opacity = '1';
                            });
                        } else {
                            cardItem.style.opacity = '1';
                        }
                        
                    }
                });
            })
        });
        
    }

    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
    }

    ngAfterContentChecked(): void {
        // this.onAnimationTitle();
    }

    private onAnimationTitle = (): void => {
        if (this.showedAnimationTitle) return;

        let titleRef = document.getElementById('title');
        if (titleRef && titleRef.textContent) {
            let splitText = new SplitText(titleRef, { type: 'chars, words, lines' }),
                splitTextTimeline = gsap.timeline();
            gsap.set(titleRef, { perspective: 400 });
            splitTextTimeline.from(splitText.chars, { duration: 0.2, autoAlpha: 0, scale: 4, force3D: true, stagger: 0.01 }, 0.5)
                .to(splitText.words, { duration: 0.1, color: "#70B100", scale: 0.9, stagger: 0.1 }, "words")
                .to(splitText.words, { duration: 0.2, color: "black", scale: 1, stagger: 0.1 }, "words+=0.1");
            splitTextTimeline.play().then(result => {
                splitTextTimeline.clear().time(0);
                splitText.revert();
                result.kill();
            });
            this.showedAnimationTitle = true;
        }
            
    }

    private getSafeResourceUrl = () => {
        if (!this.profile) return null;
        if (!this.safeSrc) {
            this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.profile.blog);
        }
    }
}