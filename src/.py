import pygame
import random

# Initialize pygame
pygame.init()

# Screen setup
WIDTH, HEIGHT = 600, 400
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Rock-Paper-Scissors Russian Roulette")

# Load images
rock_img = pygame.image.load("rock.png")
paper_img = pygame.image.load("paper.png")
scissors_img = pygame.image.load("scissors.png")
revolver_img = pygame.image.load("revolver.png")

# Resize images
rock_img = pygame.transform.scale(rock_img, (100, 100))
paper_img = pygame.transform.scale(paper_img, (100, 100))
scissors_img = pygame.transform.scale(scissors_img, (100, 100))
revolver_img = pygame.transform.scale(revolver_img, (150, 150))

def draw_text(text, x, y, font_size=30):
    font = pygame.font.Font(None, font_size)
    render = font.render(text, True, (255, 255, 255))
    screen.blit(render, (x, y))

def rock_paper_scissors():
    choices = ['rock', 'paper', 'scissors']
    player_choice = None
    computer_choice = random.choice(choices)
    
    while player_choice not in choices:
        player_choice = input("Choose rock, paper, or scissors: ").lower()
    
    screen.fill((0, 0, 0))
    draw_text("Computer chose:", 230, 50)
    
    if computer_choice == 'rock':
        screen.blit(rock_img, (250, 100))
    elif computer_choice == 'paper':
        screen.blit(paper_img, (250, 100))
    else:
        screen.blit(scissors_img, (250, 100))
    
    pygame.display.flip()
    pygame.time.delay(2000)
    
    if player_choice == computer_choice:
        return 'tie'
    elif (player_choice == 'rock' and computer_choice == 'scissors') or \
         (player_choice == 'paper' and computer_choice == 'rock') or \
         (player_choice == 'scissors' and computer_choice == 'paper'):
        return 'player'
    else:
        return 'computer'

def russian_roulette():
    bullet_chamber = random.randint(1, 6)
    spin = random.randint(1, 6)
    screen.fill((0, 0, 0))
    draw_text("You spin the cylinder...", 200, 50)
    screen.blit(revolver_img, (225, 100))
    pygame.display.flip()
    pygame.time.delay(2000)
    
    if spin == bullet_chamber:
        draw_text("BANG! You're dead!", 200, 300)
        pygame.display.flip()
        pygame.time.delay(2000)
        return True
    else:
        draw_text("Click! You got lucky.", 200, 300)
        pygame.display.flip()
        pygame.time.delay(2000)
        return False

def main():
    print("Welcome to Rock-Paper-Scissors Russian Roulette!")
    running = True
    while running:
        result = rock_paper_scissors()
        if result == 'tie':
            print("It's a tie! Play again.")
            continue
        elif result == 'player':
            print("You win this round!")
        else:
            print("You lost Rock-Paper-Scissors. Time for Russian Roulette...")
            if russian_roulette():
                print("Game over!")
                running = False
        
        play_again = input("Do you want to play again? (yes/no): ").lower()
        if play_again != 'yes':
            print("Thanks for playing!")
            running = False

    pygame.quit()

if __name__ == "__main__":
    main()