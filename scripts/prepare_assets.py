from PIL import Image, ImageOps
import potrace, numpy as np
src='assets-source/'
def trace(arr,path,w,h):
    bm=potrace.Bitmap(arr); pl=bm.trace(turdsize=20,alphamax=1.1,opttolerance=0.3)
    d=[]
    for c in pl:
        s=c.start_point; d.append(f'M{s.x:.1f} {s.y:.1f}')
        for g in c.segments:
            if g.is_corner: d.append(f'L{g.c.x:.1f} {g.c.y:.1f}L{g.end_point.x:.1f} {g.end_point.y:.1f}')
            else: d.append(f'C{g.c1.x:.1f} {g.c1.y:.1f} {g.c2.x:.1f} {g.c2.y:.1f} {g.end_point.x:.1f} {g.end_point.y:.1f}')
        d.append('Z')
    return ''.join(d)
im=Image.open(src+'logos/dmr-the-solution.jpg').convert('L')
S=4
big=im.resize((im.width*S,im.height*S),Image.LANCZOS)
a=np.array(big)<128
ys,xs=np.where(a); x0,x1,y0,y1=xs.min()-8,xs.max()+8,ys.min()-8,ys.max()+8
a=a[y0:y1,x0:x1]; h,w=a.shape
d=trace(~a,None,w,h)
for name,fill in [('dmr-logo-black','#000'),('dmr-logo-white','#fff')]:
    open(f'public/logos/{name}.svg','w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="DMR The Solution"><path fill="{fill}" fill-rule="evenodd" d="{d}"/></svg>')
print('logo',w,h,len(d))
def jpg(n,out,gray=False,q=88):
    i=Image.open(src+'photos/'+n).convert('RGB')
    if gray: i=ImageOps.autocontrast(ImageOps.grayscale(i),cutoff=(0,0)).convert('RGB')
    i.save('public/images/'+out,quality=q,optimize=True); return i
from PIL import ImageFilter
from scipy import ndimage as ni
g=ImageOps.grayscale(Image.open(src+'photos/portrait-studio.png').convert('RGB'))
arr=np.array(g); candidate=ni.binary_opening((arr>135)&(arr<225),iterations=3); lab,_=ni.label(candidate)
edge=set(lab[0,:])|set(lab[:,0])|set(lab[:,-1]); edge.discard(0)
# gaps between the arms and body are background too; the shirt sits in the centre band
W=arr.shape[1]; centre=set(np.unique(lab[:,int(W*.40):int(W*.62)]))
sizes=ni.sum(lab>0,lab,range(1,lab.max()+1))
edge|={i+1 for i,n in enumerate(sizes) if n>60 and i+1 not in centre}
bg=np.isin(lab,list(edge))
bg=ni.binary_dilation(bg,iterations=4,mask=(arr>120)&(arr<228))
alpha=Image.fromarray((~bg*255).astype('uint8')).filter(ImageFilter.GaussianBlur(0.9))
base=Image.new('RGB',g.size,(191,192,194))
base.paste(Image.open(src+'photos/portrait-studio.png').convert('RGB'),mask=alpha); base.save('public/images/portrait-hero.jpg',quality=90,optimize=True)
print('bg share',bg.mean())
jpg('at-work-monochrome.png','at-work.jpg')
jpg('flags-hall.png','flags-hall.jpg')
for n,o in [('nile-green-group','nile-green-group'),('nile-green-packaging','nile-green-packaging'),('nile-vertex-properties','nile-vertex-properties')]:
    Image.open(f'{src}logos/{n}.jpg').convert('RGB').save(f'public/logos/{o}.jpg',quality=90)
jpg('certificate-alu.png','alu-portrait.jpg')
jpg('portrait-studio-close.png','portrait-close.jpg')
