import cv2
import numpy as np
import sys, json
# YOLO --> deep learning algorithm, stateoftheart real time object detection system
# apply single nueral network to the entire image to predict boudning bpxed and their probabilities
#  high prob of image --> images considered as object detected
def read_in():
	lines = sys.stdin.readlines()
    # print(lines)
    # print('tset python')
    # print(json.loads(lines[0]))
    # Since our input would only be having one line, parse our JSON data from that
	# print('5')
	# print('hello nookko')
	#print('filee')
	#print(lines)
	#print('fefe')
	# `['"./upload/17179.png"\\n', '"./upload/17179.png"\\n']`,
	#print(lines)
	#  './upload/17179.png',
	#print(json.loads(lines[0]))
	#print('efef')

	#print('print line')
	#print(lines) # `['"./upload/36153.png"\\n']`,
	#print('print json.loads')
	#PythonShellError: TypeError: the JSON object must be str, bytes or bytearray, not list
	#print(json.loads(lines))
	#print('print json.loads 0')
	#print(json.loads(lines[0])) # './upload/36153.png',
	#print('fsdfsd')
	#print(type(lines))
	#print(len(lines))
	list = []
	if(len(lines) == 1):
		return json.loads(lines[0]) 
	elif(len(lines) > 1):
		for i in lines:
			list.append(json.loads(i))
		#print(list)
		return list

	#return json.loads(lines[0]) # for 


def main():
    #get our data as an array from read_in()
	lines = read_in()

	# parse the yolov3's weight and config file to a variable
	net = cv2.dnn.readNet('../../yolo-weight/yolov3.weights', 'yolov3_testing_1.cfg')
	# classes of object
	classes = []
	#extract othe classes from a file
	with open("classes.txt", "r") as f:
		classes = f.read().splitlines()





	## more than 1 images
	
#squares = {}
#for x in range(6):
#    squares[x] = x*x
#print(squares)
# key --> plant's name
# accuracy # return the one with higest accuracy
	# count occurance
	#array = [1,2,3,4,5,6]
	#dictionary = {p1 : [occurance, accuracy1, accuracy2, accuracy 3]   ,p2 :}
	dict_occurance ={ 'Ixora Coccinea' : 0  , 'Bougainvillea' : 0, 'Cocos Nucifera' : 0, 'Mucuna Pruriens' : 0, 'Musa Sapientum' : 0, 'Oryza Sativa' : 0 }
	dict_accuracy = {'Ixora Coccinea' : [], 'Bougainvillea' : [], 'Cocos Nucifera' : [], 'Mucuna Pruriens' : [], 'Musa Sapientum' : [], 'Oryza Sativa' : [] }
	dictionary = {}
	count = 0
	print('length lines')
	print(len(lines))
	if(len(lines) > 1):
		for i in lines:
			test = i
			img = cv2.imread(test)
			# print(lines)
			# img = cv2.imread(lines)

			#resize the img to the right format
			height, width, _ = img.shape

			# (img, scaling, the size of the image, no mead/ subtration,swap to rgb coor, no crop )
			blob = cv2.dnn.blobFromImage(img, 1/255, (416, 416), (0, 0, 0), swapRB=True, crop=False)

			#  set input from the blob into network
			net.setInput(blob)
			#get info like boudning boxes, predicte classs, 
			# need to get outout layer output, get output layer's names
			output_layers_names = net.getUnconnectedOutLayersNames()
			#  pass the the names of outputlater , we obtain outfrom output layer
			layerOutputs = net.forward(output_layers_names)

			boxes = []
			confidences = []
			# 0-5
			class_ids = []

			for output in layerOutputs:
				for detection in output:
					scores = detection[5:]
					class_id = np.argmax(scores)
					confidence = scores[class_id]
					if confidence > 0.5:
						center_x = int(detection[0]*width)
						center_y = int(detection[1]*height)
						w = int(detection[2]*width)
						h = int(detection[3]*height)
			
						x = int(center_x - w/2)
						y = int(center_y - h/2)

						boxes.append([x, y, w, h])
						confidences.append((float(confidence)))
						class_ids.append(class_id)

			indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
			font = cv2.FONT_HERSHEY_PLAIN
			colors = np.random.uniform(0, 255, size=(len(boxes), 3))
			
			for i in indexes.flatten():
				x, y, w, h = boxes[i]
				label = str(classes[class_ids[i]])
				
				confidence = str(round(confidences[i],2))
				color = colors[i]
				cv2.rectangle(img, (x,y), (x+w, y+h), color, 2)
				cv2.putText(img, label + " " + confidence, (x, y+20), font, 2, (255,255,255), 2)
			count = count +1
				#dict_occurance ={ ' Ixora Coccinea' : 0  , 'Bougainvillea' : 0, 'Cocos Nucifera' : 0, 'Mucuna Pruriens' : 0, 'Musa Sapientum' : 0, 'Oryza Sativa' : 0 }

			if(label == 'Ixora Coccinea'):
				dict_occurance['Ixora Coccinea'] = dict_occurance['Ixora Coccinea'] + 1
				dict_accuracy['Ixora Coccinea'].append(confidence)
			elif(label == 'Bougainvillea'):
				dict_occurance['Bougainvillea'] = dict_occurance['Bougainvillea'] + 1
				dict_accuracy['Bougainvillea'].append(confidence)
			elif(label == 'Cocos Nucifera'):
				dict_occurance['Cocos Nucifera'] = dict_occurance['Cocos Nucifera'] + 1
				dict_accuracy['Cocos Nucifera'].append(confidence)
			elif(label == 'Mucuna Pruriens'):
				dict_occurance['Mucuna Pruriens'] = dict_occurance['Mucuna Pruriens'] + 1
				dict_accuracy['Mucuna Pruriens'].append(confidence)
			elif(label == 'Musa Sapientum'):
				dict_occurance['Musa Sapientum'] = dict_occurance['Musa Sapientum'] + 1
				dict_accuracy['Musa Sapientum'].append(confidence)
			elif(label == 'Oryza Sativa'):
				dict_occurance['Oryza Sativa'] = dict_occurance['Oryza Sativa'] + 1
				dict_accuracy['Oryza Sativa'].append(confidence)
		
			# return the key of dictionary that has highest the highest occurance
			highestOccurance_Plant = max(dict_occurance, key=dict_occurance.get)
			#print('highestOccurance_Plant')
			print(highestOccurance_Plant)
			higestAccuracy_Plant = max(dict_accuracy[highestOccurance_Plant])
			#print('higestAccuracy_Plant')
			print(higestAccuracy_Plant)
			#print('count')
			#print(count)
			print('dict_occurance')
			print(dict_occurance)
			print('dict_accuracy')
			print(dict_accuracy)
		#if(count > math.floor(len(lines)*0.7)):
			
		#print(dictionary)
		#print('test square and confidence')
		#print(label)
		#print(dictionary[label])



	# print('fefsdfsdfw')
	# print(type(lines))
	# print(lines)
	# print(type('16606.png'))
	# print('16606.png')
	# print(type('16606.png'))
	# get img or load image
	#print('print line')
	#print(lines)
	elif(len(lines) == 1):
		test = lines
		img = cv2.imread(test)
		# print(lines)
		# img = cv2.imread(lines)

		#resize the img to the right format
		height, width, _ = img.shape

		# (img, scaling, the size of the image, no mead/ subtration,swap to rgb coor, no crop )
		blob = cv2.dnn.blobFromImage(img, 1/255, (416, 416), (0, 0, 0), swapRB=True, crop=False)

		#  set input from the blob into network
		net.setInput(blob)
		#get info like boudning boxes, predicte classs, 
		# need to get outout layer output, get output layer's names
		output_layers_names = net.getUnconnectedOutLayersNames()
		#  pass the the names of outputlater , we obtain outfrom output layer
		layerOutputs = net.forward(output_layers_names)

		boxes = []
		confidences = []
		# 0-5
		class_ids = []

		for output in layerOutputs:
			for detection in output:
				scores = detection[5:]
				class_id = np.argmax(scores)
				confidence = scores[class_id]
				if confidence > 0.5:
					center_x = int(detection[0]*width)
					center_y = int(detection[1]*height)
					w = int(detection[2]*width)
					h = int(detection[3]*height)
		
					x = int(center_x - w/2)
					y = int(center_y - h/2)

					boxes.append([x, y, w, h])
					confidences.append((float(confidence)))
					class_ids.append(class_id)

		indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
		font = cv2.FONT_HERSHEY_PLAIN
		colors = np.random.uniform(0, 255, size=(len(boxes), 3))
		
		for i in indexes.flatten():
			x, y, w, h = boxes[i]
			label = str(classes[class_ids[i]])
			
			confidence = str(round(confidences[i],2))
			color = colors[i]
			cv2.rectangle(img, (x,y), (x+w, y+h), color, 2)
			cv2.putText(img, label + " " + confidence, (x, y+20), font, 2, (255,255,255), 2)
		
		print(label)
		print(confidence)
	










	# show  image 
	# cv2.imshow('Image', img)
	# cv2.waitKey(0)
	# cv2.destroyAllWindows()  
	# print('fewf')
	# print(lines)
		# print('print from main')
		# print(lines)
		# Sum  of all the items in the providen array
		# total_sum_inArray = 0
		# for item in lines:
		#     # print(item)
		#     total_sum_inArray += item
		# print('555')
		#return the sum to the output stream
		# print(total_sum_inArray)

# Start process
if __name__ == '__main__':
    main()

