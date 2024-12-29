import pyautogui
import random
import keyboard
import time
import threading

# Define the central area percentage and speeds (adjust as needed)
central_area_percentage = 80
cursor_speed = 1  # Adjust for cursor speed (smaller values are faster)

# Global variable to control the loop
running = True

# Function to get the central area's position and size
def get_central_area_rect():
    screen_width, screen_height = pyautogui.size()
    central_width = screen_width * central_area_percentage / 100
    central_height = screen_height * central_area_percentage / 100
    central_x = (screen_width - central_width) / 2
    central_y = (screen_height - central_height) / 2
    return (central_x, central_y, central_width, central_height)

# Function to move the mouse cursor randomly within the central area
def move_mouse_within_central_area():
    global running
    central_area_rect = get_central_area_rect()
    
    while running:
        # Generate random coordinates within the central area
        x = random.randint(
            int(central_area_rect[0]),
            int(central_area_rect[0] + central_area_rect[2])
        )
        y = random.randint(
            int(central_area_rect[1]),
            int(central_area_rect[1] + central_area_rect[3])
        )
        
        # Move the cursor to the generated coordinates
        pyautogui.moveTo(x, y, cursor_speed)
        
        # Generate random intervals for clicking
        click_interval = random.uniform(1, 5)  # Adjust the range for clicking frequency
        
        # Perform a mouse click
        pyautogui.click()
        
        # Pause for the specified click interval
        time.sleep(click_interval)

# Function to start the mouse movement when CTRL+S is pressed
def start_mouse_movement():
    print("Press CTRL+S to start mouse movement.")
    keyboard.wait('ctrl+s')
    print("Mouse movement started.")
    move_mouse_within_central_area()

# Function to stop the program when CTRL+X is pressed
def stop_program():
    global running
    print("Press CTRL+X to stop the program.")
    keyboard.wait('ctrl+x')
    print("Mouse movement Stopped.")
    running = False

# Start the mouse movement when CTRL+S is pressed (in a separate thread)
mouse_movement_thread = threading.Thread(target=start_mouse_movement)
mouse_movement_thread.start()

# Start the function to stop the program when CTRL+X is pressed (in a separate thread)
stop_program_thread = threading.Thread(target=stop_program)
stop_program_thread.start()